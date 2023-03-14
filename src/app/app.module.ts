import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { ApiService } from './shared/service/api.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { BorderCardDirective } from './shared/border-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ListComponent,
    LoaderComponent,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
