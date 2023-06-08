import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3TicketComponent } from './punto3-ticket.component';

describe('Punto3TicketComponent', () => {
  let component: Punto3TicketComponent;
  let fixture: ComponentFixture<Punto3TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto3TicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto3TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
