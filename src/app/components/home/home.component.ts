import { Component, OnInit } from '@angular/core';
import { StoryService } from './../../services/home.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/takeWhile';
import { MatDialog } from '@angular/material';

import { IStory } from './../../models/story';

import { FullStoryComponent } from '../full-story/full-story.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stories: IStory[];
  private alive: boolean = true;
  private timer = 10000;
  private str = '';
  public displayedColumns = ['author','created_at','url','title'];
  public dataSource = new MatTableDataSource([]);

  constructor(private _storyService: StoryService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this._storyService
      .getAllStory()
      .subscribe(
        data => {
          this.stories = data['hits'];
          this.dataSource = new MatTableDataSource(this.stories);
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
              this.stories = data['hits'];
              this.dataSource = new MatTableDataSource(this.stories);
              this.dataSource.filter = this.str;
            },
            error => console.log('Can not load')
          )
      });
  }

  public openDialog(story: IStory): void {
    let dialogRef = this.dialog.open(FullStoryComponent, {
      width: '60%',
      data: story
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.str = filterValue;
    this.dataSource.filter = filterValue;
  }

}
