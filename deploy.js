var AWS = require('aws-sdk');
var path = require("path");
var fs = require('fs');
const mime = require('mime-types')

// const uploadDir = function(s3Path, bucketName) {

//     let s3 = new AWS.S3();
//     let cloudfront = new AWS.CloudFront();
//     let files = [];

//     function walkSync(currentDirPath, callback) {
//         fs.readdirSync(currentDirPath).forEach(function (name) {
//             var filePath = path.join(currentDirPath, name);
//             var stat = fs.statSync(filePath);
//             if (stat.isFile()) {
//                 callback(filePath, stat);
//             } else if (stat.isDirectory()) {
//                 walkSync(filePath, callback);
//             }
//         });
//     }

//     walkSync(s3Path, function(filePath, stat) {
//         let fileName = filePath.split("\\")[2];
//         files.push(fileName);
//         let params = {
//             Bucket: bucketName,
//             Key: fileName,
//             Body: fs.readFileSync(filePath),
//             ACL: "public-read",
//             ContentType: mime.lookup(filePath)
//         };
//         s3.putObject(params, function(err, data) {
//             if (err) {
//                 throw new Error(err);
//             } else {
//                 console.log("Successfully uploaded " + fileName + " to " + bucketName);
//             }
//         });

//     });

// };

function pollInvalidation(tries, maxTries, data) {
    tries++;
    if(tries > maxTries) {
        return;
    }

    let cloudfront = new AWS.CloudFront();

    setTimeout(() => {
        cloudfront.getInvalidation({
            DistributionId: 'E1V6PC9HA59YI1',
            Id: data.Invalidation.Id
        }, function (err, newdata) {
            if (err) {
                throw new Error(err);
            }
            else {
                if (newdata.Invalidation.Status === 'Completed') {
                    console.log('Try ' + tries + '. Status: ' + newdata.Invalidation.Status + '. Invalidation complete. Deployment finished.');
                } else {
                    console.log('Try ' + tries + '. Status: ' + newdata.Invalidation.Status + '. Invalidation still in progress...');
                    pollInvalidation(tries, maxTries, newdata);
                }
            }
        });
    }, 5000);
}

function createInvalidation() {
    let cloudfront = new AWS.CloudFront();
    cloudfront.createInvalidation({
        DistributionId: 'E1V6PC9HA59YI1',
        InvalidationBatch: {
            CallerReference: '' + new Date().getTime(),
            Paths: {
                Quantity: 1,
                Items: ['/*']
            }
        }
    } , function (err, data) {
        if (err) {
            throw new Error(err);
        }
        else {
            console.log("Successfully invalidated.");
            console.log("Waiting for invalidation to complete...");
            pollInvalidation(0, 30, data);
        }
    });
}

// uploadDir("./dist/ac-stats", "acstats");
createInvalidation();