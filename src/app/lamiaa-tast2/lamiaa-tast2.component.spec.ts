import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamiaaTast2Component } from './lamiaa-tast2.component';

describe('LamiaaTast2Component', () => {
  let component: LamiaaTast2Component;
  let fixture: ComponentFixture<LamiaaTast2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamiaaTast2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamiaaTast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
