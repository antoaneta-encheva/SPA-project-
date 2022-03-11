import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedAdsComponent } from './applied-ads.component';

describe('AppliedAdsComponent', () => {
  let component: AppliedAdsComponent;
  let fixture: ComponentFixture<AppliedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
