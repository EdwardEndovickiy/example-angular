import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

//model
import { Story } from './../models/story';

const STORY_URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

@Injectable()
export class StoryService {

  constructor(private _http: HttpClient) { }

  public getAllStory(): Observable<Story[]> {
    return new Observable((observer: Observer<Story[]>) => {
      this._http
        .get<Story[]>(STORY_URL)
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
