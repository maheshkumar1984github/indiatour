import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercitiesComponent } from './othercities.component';

describe('OthercitiesComponent', () => {
  let component: OthercitiesComponent;
  let fixture: ComponentFixture<OthercitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OthercitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthercitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
