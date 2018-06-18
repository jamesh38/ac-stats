import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-ratings-changes',
  templateUrl: './ratings-changes.component.html',
  styleUrls: ['./ratings-changes.component.scss']
})
export class RatingsChangesComponent {

    loading;
    rows;
    columns = [
        {name: 'Player', prop: 'name'},
        {prop: 'change'}
    ];

    constructor(public api: ApiService) {
        this.loading = true;
        api
          .getRatingChanges()
          .subscribe(res => {
              this.rows = res.players;
              this.loading = false;
            });
    }

}
