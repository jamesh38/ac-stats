import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

    getAveragePlayers(): any {
        return this.http.get(environment.url + '/averageplayers');
    }

    getRefs(period: string = '7'): any {
        return this.http.get(environment.url + '/refs?period=' + period);
    }

    getMaps(period: string = '7'): any {
        return this.http.get(environment.url + '/maps?period=' + period);
    }

    getRatingChanges(): any {
        return this.http.get(environment.url + '/changes');
    }

    getGames(period: string = '7'): any {
        return this.http.get(environment.url + '/games?period=' + period);
    }

    getRatings(): any {
        return this.http.get(environment.url + '/ratings');
    }

    getPlayers(): any {
        return this.http.get(environment.url + '/players');
    }

    getPlayer(name: string, period: number = 7): any {
        return this.http.get(environment.url + '/player?name=' + name + '&period=' + period);
    }
}
