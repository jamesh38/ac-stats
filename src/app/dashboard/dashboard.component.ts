import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  refs: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Referee';
  showYAxisLabel = true;
  yAxisLabel = 'Games Hosted';
  loading = true;

  constructor(public api: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.api.getRefs().subscribe(res => {
      res.refs.forEach(item => {
        item.name = item.name.substring(0, 6);
        if (item.name.length > 6) {
          item.name += '...';
        }
      });
      this.refs = res.refs;
      this.loading = false;
    });
  }

}
