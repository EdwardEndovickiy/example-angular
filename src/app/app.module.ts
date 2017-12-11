import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { StoryService } from './services/home.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatDialogModule
} from '@angular/material';
import { FullStoryComponent } from './components/full-story/full-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [FullStoryComponent],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
