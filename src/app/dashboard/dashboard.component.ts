import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'acstats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public api: ApiService) {
        const playerList = localStorage.getItem('acstats.players');
        if (!playerList) {
             this.api.getPlayers().subscribe(players => localStorage.setItem('acstats.players', JSON.stringify(players)));
        }
  }
  ngOnInit() {}
}
