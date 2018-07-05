import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { PlayerSelectComponent } from '../player-select/player-select.component';

@Component({
    selector: 'acstats-player-stats',
    templateUrl: './player-stats.component.html',
    styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent {

    @ViewChild('playerSelect') playerSelect: PlayerSelectComponent;

    _loading = false;
    selectedPlayer;
    dr;
    kd;
    wp;
    numberCard;
    period = 7;

    drGauge = {
        min: 0,
        max: 1.5,
        lgSegs: 10,
        smSegs: 5,
        units: 'DR'
    };

    kdGauge = {
        min: 0,
        max: 1.5,
        lgSegs: 10,
        smSegs: 5,
        units: 'KD'
    };

    wpGauge = {
        min: 0,
        max: 100,
        lgSegs: 10,
        smSegs: 5,
        units: 'W%'
    };

    get loading(): boolean {
        return this.playerSelect.loading || this._loading;
    }

    constructor(public api: ApiService) { }

    playerSelected(player) {
        this.selectedPlayer = player;
        this.getPlayer();
    }

    getPlayer() {

        if (!this.selectedPlayer || !this.period) {
            return;
        }

        this._loading = true;
        this.api.getPlayer(this.selectedPlayer, this.period).subscribe(res => {
        this.dr = [{name: 'DR', value: res.stats.dr}];
        this.kd = [{name: 'KD', value: res.stats.kd}];
        this.wp = [{name: 'WP', value: (res.stats.won / res.played) * 100}];
        this.numberCard = [
            {name: 'Games Played', value: res.played},
            {name: 'Avg Kills', value: res.stats.kills},
            {name: 'Avg Deaths', value: res.stats.deaths},
        ];
        this._loading = false;
        });
    }

    periodChange(period) {
        this.period = period.value;
        this.getPlayer();
    }
}
