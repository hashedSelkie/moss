import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeLandingComponent } from './wildlife-landing.component';

describe('WildlifeLandingComponent', () => {
  let component: WildlifeLandingComponent;
  let fixture: ComponentFixture<WildlifeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildlifeLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildlifeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
