import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActAsincronaComponent } from './act-asincrona.component';

describe('ActAsincronaComponent', () => {
  let component: ActAsincronaComponent;
  let fixture: ComponentFixture<ActAsincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActAsincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActAsincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
