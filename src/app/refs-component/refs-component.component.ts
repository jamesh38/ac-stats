import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-refs-component',
  templateUrl: './refs-component.component.html',
  styleUrls: ['./refs-component.component.scss']
})
export class RefsComponentComponent implements OnInit {

    refs: any[];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Referee';
    showYAxisLabel = true;
    yAxisLabel = 'Games Hosted';
    loading = true;
    period = '7';

    constructor(public api: ApiService) {}

    ngOnInit() {
        this.loadRefs();
    }

    loadRefs() {
        this.loading = true;
        this.api.getRefs(this.period).subscribe(res => {
            this.refs = res.refs;
            this.loading = false;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.loadRefs();
    }

}
