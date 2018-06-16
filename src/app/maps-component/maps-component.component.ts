import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrls: ['./maps-component.component.scss']
})
export class MapsComponentComponent implements OnInit {

    showLegend = true;
    showLabels = true;
    explodeSlices = false;
    doughnut = false;
    maps;
    loading;
    period = '30';

    constructor(public api: ApiService) { }

    ngOnInit() {
        this.loading = true;
        this.loadMaps();
    }

    loadMaps() {
        this.loading = true;
        this.api.getMaps(this.period).subscribe(res => {
            this.maps = res.maps;
            this.loading = false;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.loadMaps();
    }

}
