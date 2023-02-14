import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarExperienciaComponent } from './formulario-editar-experiencia.component';

describe('FormularioEditarExperienciaComponent', () => {
  let component: FormularioEditarExperienciaComponent;
  let fixture: ComponentFixture<FormularioEditarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEditarExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEditarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
