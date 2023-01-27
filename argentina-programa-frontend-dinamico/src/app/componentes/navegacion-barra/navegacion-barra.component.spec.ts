import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionBarraComponent } from './navegacion-barra.component';

describe('NavegacionBarraComponent', () => {
  let component: NavegacionBarraComponent;
  let fixture: ComponentFixture<NavegacionBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
