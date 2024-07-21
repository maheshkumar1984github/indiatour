import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimachalComponent } from './himachal.component';

describe('HimachalComponent', () => {
  let component: HimachalComponent;
  let fixture: ComponentFixture<HimachalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HimachalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HimachalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
