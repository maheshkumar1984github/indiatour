import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarakhandComponent } from './uttarakhand.component';

describe('UttarakhandComponent', () => {
  let component: UttarakhandComponent;
  let fixture: ComponentFixture<UttarakhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UttarakhandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UttarakhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
