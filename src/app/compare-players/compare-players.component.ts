import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acstats-compare-players',
  templateUrl: './compare-players.component.html',
  styleUrls: ['./compare-players.component.scss']
})
export class ComparePlayersComponent implements OnInit {

    constructor() { }

    players = [0];

    ngOnInit() {
    }

    addPlayer() {
        if (this.players.length === 5) {
            return;
        }

        this.players.push(this.players.length);
    }

    removePlayer(player) {

        if (this.players.length === 1) {
            return;
        }

        this.players.splice(player, 1);
    }

}
