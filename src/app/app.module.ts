import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComparePlayersComponent } from './compare-players/compare-players.component';
import { HttpClientModule } from '@angular/common/http';
import { RefsComponentComponent } from './refs-component/refs-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapsComponentComponent } from './maps-component/maps-component.component';
import { PeriodComponentComponent } from './period-component/period-component.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { RatingsChangesComponent } from './ratings-changes/ratings-changes.component';
import { GamesListComponent } from './games-list/games-list.component';
import { DatePipe } from '@angular/common';
import { PlayerRatingsComponent } from './player-ratings/player-ratings.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerSelectComponent } from './player-select/player-select.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'compare', component: ComparePlayersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    ComparePlayersComponent,
    RefsComponentComponent,
    MapsComponentComponent,
    PeriodComponentComponent,
    GeneralStatsComponent,
    RatingsChangesComponent,
    GamesListComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
    PlayerSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    NgxDatatableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
