import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-player-ratings',
  templateUrl: './player-ratings.component.html',
  styleUrls: ['./player-ratings.component.scss']
})
export class PlayerRatingsComponent {

    rows;
    loading = true;
    period = '30';
    columns = [
        { prop: 'rank' },
        { prop: 'name' },
        { prop: 'rating' },
    ];

    constructor(public api: ApiService) {
        this.loadRatings();
    }

    loadRatings() {
        this.loading = true;
        this.api.getRatings().subscribe(res => {
            this.rows = res.players;
            this.loading = false;
        });
    }

}
