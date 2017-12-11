import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

//model
import { IStory } from './../models/story';

const STORY_URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

@Injectable()
export class StoryService {

  constructor(private _http: HttpClient) { }

  public getAllStory(): Observable<IStory[]> {
    return new Observable((observer: Observer<IStory[]>) => {
      this._http
        .get<IStory[]>(STORY_URL)
        .subscribe(
          (response: any[]) => {
            observer.next(response);
            observer.complete();
          },
          errors => observer.error(errors)
        );
    });
  }

}
