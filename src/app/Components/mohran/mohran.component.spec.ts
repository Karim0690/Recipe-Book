import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohranComponent } from './mohran.component';

describe('MohranComponent', () => {
  let component: MohranComponent;
  let fixture: ComponentFixture<MohranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MohranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
