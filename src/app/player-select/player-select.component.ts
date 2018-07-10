import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'acstats-player-select',
    templateUrl: './player-select.component.html',
    styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent {

    @Output() playerSelect = new EventEmitter<boolean>();
    @Input() disabled = false;
    options;
    filteredOptions: Observable<string[]>;
    myControl: FormControl = new FormControl();
    loading = true;


    constructor(public api: ApiService) {
        // Check local storage first.
        const playersList = localStorage.getItem('acstats.players');
        if (playersList) {
            this.options = JSON.parse(playersList);
            this.loading = false;
            this.createFilteredOptions();
        } else {
            this.api.getPlayers().subscribe(res => {
                this.loading = false;
                this.options = res;
                localStorage.setItem('acstats.players', JSON.stringify(res));
                this.createFilteredOptions();
            });
        }
    }

    createFilteredOptions() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(val => this.filter(val))
            );
    }

    filter(val: string): string[] {
        return this.options.filter(option =>
        option.toLowerCase().includes(val.toLowerCase()));
    }

    optionSelect(event) {
        console.log(event.option.value);
        this.playerSelect.emit(event.option.value);
    }

}
