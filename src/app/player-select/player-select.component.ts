import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'acstats-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit {

  options;
  filteredOptions: Observable<string[]>;
  myControl: FormControl = new FormControl();
  loading = true;
  @Output() playerSelect = new EventEmitter<boolean>();

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getPlayers().subscribe(res => {
      this.loading = false;
      this.options = res;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    });
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
