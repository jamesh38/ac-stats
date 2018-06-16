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
    data = [];

    constructor(public api: ApiService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.activePlayersReady = false;
        this.averagePlayersReady = false;
        this.gamesReady = false;
        this.data = [];
        this.api.getRatingChanges().subscribe(res => {
            this.data.push({name: 'Active Players Today*', value: res.players.length});
            this.activePlayersReady = true;
        });

        this.api.getAveragePlayers().subscribe(res => {
            this.data.push({ name: 'Avergae Players* (Last 25 Games)', value: res.average.average_players});
            this.averagePlayersReady = true;
        });

        this.api.getGames(this.period).subscribe(res => {
            this.data.push({ name: 'Number of Games', value: res.games.length});
            this.gamesReady = true;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.loadData();
    }

}
