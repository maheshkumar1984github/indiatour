import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogalaryComponent } from './videogalary.component';

describe('VideogalaryComponent', () => {
  let component: VideogalaryComponent;
  let fixture: ComponentFixture<VideogalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideogalaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideogalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
