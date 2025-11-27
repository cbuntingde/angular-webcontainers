import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureCardsComponent } from './components/feature-cards/feature-cards.component';
import { InteractiveDemoComponent } from './components/interactive-demo/interactive-demo.component';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureCardsComponent,
    InteractiveDemoComponent,
    LivePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }