import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemComponent } from './recipes-item.component';

describe('RecipesItemComponent', () => {
  let component: RecipesItemComponent;
  let fixture: ComponentFixture<RecipesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
