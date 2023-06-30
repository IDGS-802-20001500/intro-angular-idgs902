import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoReactiveComponent } from './alumno-reactive.component';

describe('AlumnoReactiveComponent', () => {
  let component: AlumnoReactiveComponent;
  let fixture: ComponentFixture<AlumnoReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoReactiveComponent]
    });
    fixture = TestBed.createComponent(AlumnoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
