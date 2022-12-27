import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshChampionComponent } from './refresh-champion.component';

describe('RefreshChampionComponent', () => {
  let component: RefreshChampionComponent;
  let fixture: ComponentFixture<RefreshChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshChampionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
