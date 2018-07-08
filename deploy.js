var AWS = require('aws-sdk');
var path = require("path");
var fs = require('fs');
const mime = require('mime-types')

const uploadDir = function(s3Path, bucketName) {

    let s3 = new AWS.S3();
    let cloudfront = new AWS.CloudFront();
    let files = [];

    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let fileName = filePath.split("\\")[2];
        files.push(fileName);
        let params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fs.readFileSync(filePath),
            ACL: "public-read",
            ContentType: mime.lookup(filePath)
        };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully uploaded " + fileName + " to " + bucketName);
            }
        });

    });


    setTimeout(() => {
        var params = {
            DistributionId: 'E1V6PC9HA59YI1',
            InvalidationBatch: {
                CallerReference: '' + new Date().getTime(),
                Paths: {
                    Quantity: files.length,
                    Items: files.map(item => "/" + item)
                }
            }
        };
        cloudfront.createInvalidation(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log("Succesffully invalidated.");           // successful response
        });
    }, 3000)
};

uploadDir("./dist/ac-stats", "acstats");
