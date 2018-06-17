import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-general-stats',
  templateUrl: './general-stats.component.html',
  styleUrls: ['./general-stats.component.scss']
})
export class GeneralStatsComponent implements OnInit {

    get loading(): boolean {
        return !(this.activePlayersReady && this.averagePlayersReady && this.gamesReady);
    }
    activePlayersReady = false;
    averagePlayersReady = false;
    gamesReady = false;
    period = '7';
    data = [
        { name: 'Active Players Today*', value: 0 },
        { name: 'PPG* (Last 25 Games)', value: 0 },
        { name: 'Total Games', value: 0 }
    ];

    constructor(public api: ApiService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.activePlayersReady = false;
        this.averagePlayersReady = false;
        this.gamesReady = false;

        this.api.getRatingChanges().subscribe(res => {
            this.data[0].value = res.players.length;
            this.activePlayersReady = true;
        });

        this.api.getAveragePlayers().subscribe(res => {
            this.data[1].value = res.average.average_players;
            this.averagePlayersReady = true;
        });

        this.api.getGames(this.period).subscribe(res => {
            this.data[2].value = res.games.length;
            this.gamesReady = true;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.loadData();
    }

}
