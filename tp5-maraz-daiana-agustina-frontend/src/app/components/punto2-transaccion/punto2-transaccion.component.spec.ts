import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2TransaccionComponent } from './punto2-transaccion.component';

describe('Punto2TransaccionComponent', () => {
  let component: Punto2TransaccionComponent;
  let fixture: ComponentFixture<Punto2TransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2TransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2TransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
