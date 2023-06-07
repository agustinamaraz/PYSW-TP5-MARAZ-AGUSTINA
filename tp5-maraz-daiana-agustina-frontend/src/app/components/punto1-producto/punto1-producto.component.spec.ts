import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1ProductoComponent } from './punto1-producto.component';

describe('Punto1ProductoComponent', () => {
  let component: Punto1ProductoComponent;
  let fixture: ComponentFixture<Punto1ProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto1ProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto1ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
