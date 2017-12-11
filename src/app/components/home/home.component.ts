import { Component, OnInit } from '@angular/core';
import { StoryService } from './../../services/home.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/takeWhile';
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
  private alive: boolean = true;
  private timer = 10000;
  public sortTitle = false;

  constructor(private _storyService: StoryService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this._storyService
      .getAllStory()
      .subscribe(
        data => {
          this.stories = data['hits'];
          this.getStory();
        },
        error => console.log('Can not load')
      )
  }

  public getStory() {
    IntervalObservable.create(this.timer)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this._storyService
          .getAllStory()
          .subscribe(
            data => {
              if (this.sortTitle) {
                this.stories = data['hits'].sort(this.sortByTitle);
              } else {
                this.stories = data['hits'];
              }
            },
            error => console.log('Can not load')
          )
      });
  }

  public openDialog(story: Story): void {
    let dialogRef = this.dialog.open(FullStoryComponent, {
      width: '60%',
      data: story
    });
  }

  public sort() {
    this.sortTitle = !this.sortTitle;
    if (this.sortTitle) {
      this.stories.sort(this.sortByTitle);
    } else {
      this.stories.sort(this.sortByDate);
    }
  }

  public sortByTitle(story1, story2) {
    if (story1.title < story2.title) return -1;
    else if ( story1.title > story2.title) return 1;
    else return 0;
  }

  public sortByDate(story1, story2) {
    if (story1.created_at > story2.created_at) return -1;
    else if ( story1.created_at < story2.created_at) return 1;
    else return 0;
  }

}
