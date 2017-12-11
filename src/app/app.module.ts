import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { StoryService } from './services/home.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatDialogModule, MatTableModule,
  MatInputModule
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
    FormsModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule
  ],
  entryComponents: [FullStoryComponent],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
