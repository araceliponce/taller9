import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnClaseComponent } from './en-clase.component';

describe('EnClaseComponent', () => {
  let component: EnClaseComponent;
  let fixture: ComponentFixture<EnClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
