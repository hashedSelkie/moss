import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMenuComponent } from './about-menu.component';

describe('AboutMenuComponent', () => {
  let component: AboutMenuComponent;
  let fixture: ComponentFixture<AboutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
