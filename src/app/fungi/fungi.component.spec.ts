import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FungiComponent } from './fungi.component';

describe('FungiComponent', () => {
  let component: FungiComponent;
  let fixture: ComponentFixture<FungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FungiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
