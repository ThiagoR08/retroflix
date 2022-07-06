import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilmesComponent } from './cadastro-filmes.component';

describe('CategoriasComponent', () => {
  let component: CadastroFilmesComponent;
  let fixture: ComponentFixture<CadastroFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});