import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'acstats-period-component',
  templateUrl: './period-component.component.html',
  styleUrls: ['./period-component.component.scss']
})
export class PeriodComponentComponent implements OnInit {

    @Output() selectedChange = new EventEmitter<boolean>();
    @Input() defaultPeriod: string;

    periods = [
        { value: '3', viewValue: 'Last 3 days' },
        { value: '7', viewValue: 'Last 7 days' },
        { value: '14', viewValue: 'Last 14 days' },
        { value: '20', viewValue: 'Last 20 days' },
        { value: '30', viewValue: 'Last 30 days' },
        { value: '60', viewValue: 'Last 60 days' },
        { value: '90', viewValue: 'Last 90 days'},
        { value: '120', viewValue: 'Last 120 days'},
    ];

    selected = '7';

    constructor() {}

    ngOnInit() {
        if (this.defaultPeriod) {
            this.selected = this.defaultPeriod;
        }
    }

    selectChanged(selection) {
        this.selectedChange.emit(selection);
    }

}
