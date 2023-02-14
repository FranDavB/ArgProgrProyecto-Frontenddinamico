import { TestBed } from '@angular/core/testing';

import { MostrarFormularioService } from './mostrar-formulario.service';

describe('MostrarFormularioService', () => {
  let service: MostrarFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
