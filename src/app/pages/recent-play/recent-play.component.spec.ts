import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPlayComponent } from './recent-play.component';

describe('RecentPlayComponent', () => {
  let component: RecentPlayComponent;
  let fixture: ComponentFixture<RecentPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
