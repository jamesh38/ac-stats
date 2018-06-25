import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { PlayerSelectComponent } from '../player-select/player-select.component';

@Component({
  selector: 'acstats-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  @ViewChild('playerSelect') playerSelect: PlayerSelectComponent;
  _loading = false;
  get loading(): boolean {
    return  this.playerSelect.loading || this._loading;
  }
  selectedPlayer;


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
  dr;
  kd;
  wp;
  numberCard;

  constructor(public api: ApiService) { }

  ngOnInit() {

  }

  playerSelected(player) {
    this.selectedPlayer = player;
    this.getPlayer();
  }

  getPlayer() {
    this._loading = true;
    this.api.getPlayer(this.selectedPlayer).subscribe(res => {
      this.dr = [{name: 'DR', value: res.stats.dr}];
      this.kd = [{name: 'KD', value: res.stats.kd}];
      this.wp = [{name: 'WP', value: (res.stats.won / res.played) * 100}];
      this.numberCard = [
        {name: 'Games Played', value: res.played}
        {name: 'Avg Kills', value: res.stats.kills},
        {name: 'Avg Deaths', value: res.stats.deaths},
      ];
      this._loading = false;
    });
  }

  getDrColor(dr) {
    console.log(dr);

  }

  findColorBetween(left, right, percentage) {
      const newColor = {r: null, g: null, b: null};
      const components = ['r', 'g', 'b'];
      for (let i = 0; i < components.length; i++) {
          const c = components[i];
          newColor[c] = Math.round(left[c] + (right[c] - left[c]) * percentage / 100);
      }
      return this.rgbToHex(newColor.r, newColor.b, newColor.g);
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}
