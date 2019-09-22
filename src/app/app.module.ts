import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuotesFormComponent,
    QuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
