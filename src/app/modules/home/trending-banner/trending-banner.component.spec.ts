import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBannerComponent } from './trending-banner.component';

describe('TrendingBannerComponent', () => {
  let component: TrendingBannerComponent;
  let fixture: ComponentFixture<TrendingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
