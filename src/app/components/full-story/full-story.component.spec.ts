import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStoryComponent } from './full-story.component';

describe('FullStoryComponent', () => {
  let component: FullStoryComponent;
  let fixture: ComponentFixture<FullStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
