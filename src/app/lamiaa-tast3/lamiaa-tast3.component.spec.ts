import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamiaaTast3Component } from './lamiaa-tast3.component';

describe('LamiaaTast3Component', () => {
  let component: LamiaaTast3Component;
  let fixture: ComponentFixture<LamiaaTast3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamiaaTast3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamiaaTast3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
