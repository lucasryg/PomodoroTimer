import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAnimado } from './background-animado';

describe('BackgroundAnimado', () => {
  let component: BackgroundAnimado;
  let fixture: ComponentFixture<BackgroundAnimado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundAnimado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundAnimado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
