import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeMenuComponent } from './wildlife-menu.component';

describe('WildlifeMenuComponent', () => {
  let component: WildlifeMenuComponent;
  let fixture: ComponentFixture<WildlifeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildlifeMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildlifeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
