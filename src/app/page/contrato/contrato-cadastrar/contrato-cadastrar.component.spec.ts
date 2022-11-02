import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCadastrarComponent } from './contrato-cadastrar.component';

describe('ContratoCadastrarComponent', () => {
  let component: ContratoCadastrarComponent;
  let fixture: ComponentFixture<ContratoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
