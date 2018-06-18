import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';

class DateTimePipe extends DatePipe {
    public transform(value): any {
        return super.transform(value, 'M/d/yy h:mm a');
    }
}

@Component({
  selector: 'acstats-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

    rows;
    loading = true;
    period = '30';
    columns = [
        {prop: 'id', name: 'ID'},
        {prop: 'map'},
        {prop: 'host'},
        { prop: 'date', pipe: new DateTimePipe('en-US')}
    ];

    constructor(public api: ApiService, public date: DatePipe) {
        this.loadGames();
     }

    loadGames() {
        this.loading = true;
        this.api.getGames(this.period).subscribe(res => {
            this.rows = res.games;
            this.loading = false;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.loadGames();
    }

}
