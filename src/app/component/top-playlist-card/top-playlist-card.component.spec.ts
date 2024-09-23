import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlaylistCardComponent } from './top-playlist-card.component';

describe('TopPlaylistCardComponent', () => {
  let component: TopPlaylistCardComponent;
  let fixture: ComponentFixture<TopPlaylistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlaylistCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlaylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
