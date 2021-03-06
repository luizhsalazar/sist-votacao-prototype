import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { WidgetStatusVotacaoComponent } from './widget-status-votacao/widget-status-votacao.component';
import { ConselheirosBoardComponent } from './conselheiros-board/conselheiros-board.component';
import { VotacaoService } from './votacao.service';
import { HttpClientModule } from '@angular/common/http';

// Simple Timer
import { SimpleTimer } from 'ng2-simple-timer';
import { TimerComponent } from './timer/timer.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { HeaderComponent } from './header/header.component';
import { ResultadoVotacaoComponent } from './resultado-votacao/resultado-votacao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalResultComponent } from './modal-result/modal-result.component';
import { PautaDescriptionComponent } from './pauta-description/pauta-description.component';

// Spinner pre loader
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoundProgressModule,
    BrowserAnimationsModule,
    BusyModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    WidgetStatusVotacaoComponent,
    ConselheirosBoardComponent,
    TimerComponent,
    HeaderComponent,
    ResultadoVotacaoComponent,
    ModalResultComponent,
    PautaDescriptionComponent
  ],
  entryComponents: [ ModalResultComponent ],
  providers: [VotacaoService, SimpleTimer, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
