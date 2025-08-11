import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMossComponent } from './the-moss.component';

describe('TheMossComponent', () => {
  let component: TheMossComponent;
  let fixture: ComponentFixture<TheMossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMossComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
