import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistrabajosComponent } from './mistrabajos.component';

describe('MistrabajosComponent', () => {
  let component: MistrabajosComponent;
  let fixture: ComponentFixture<MistrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
