import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamiaaTast1Component } from './lamiaa-tast1.component';

describe('LamiaaTast1Component', () => {
  let component: LamiaaTast1Component;
  let fixture: ComponentFixture<LamiaaTast1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamiaaTast1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamiaaTast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
