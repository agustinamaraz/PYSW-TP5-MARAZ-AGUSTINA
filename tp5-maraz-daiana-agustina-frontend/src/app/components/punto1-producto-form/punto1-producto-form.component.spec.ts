import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1ProductoFormComponent } from './punto1-producto-form.component';

describe('Punto1ProductoFormComponent', () => {
  let component: Punto1ProductoFormComponent;
  let fixture: ComponentFixture<Punto1ProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto1ProductoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto1ProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
