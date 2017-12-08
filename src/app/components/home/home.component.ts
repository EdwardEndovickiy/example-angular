import { Component, OnInit } from '@angular/core';
import { StoryService } from './../../services/home.service';

import { MatDialog } from '@angular/material';

import { Story } from './../../models/story';

import { FullStoryComponent } from '../full-story/full-story.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public stories: Story[];

  constructor(private _storyService: StoryService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getStory();
  }

  public getStory() {
    this._storyService
      .getAllStory()
      .subscribe(
        data => {
          this.stories = data['hits'];
          console.log(this.stories);
        },
        error => console.log('Can not load')
      )
  }

  public openDialog(story: Story): void {
    let dialogRef = this.dialog.open(FullStoryComponent, {
      width: '70%',
      data: story
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
