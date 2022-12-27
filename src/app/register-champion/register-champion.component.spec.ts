import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChampionComponent } from './register-champion.component';

describe('RegisterChampionComponent', () => {
  let component: RegisterChampionComponent;
  let fixture: ComponentFixture<RegisterChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterChampionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
