import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MossMenuComponent } from './moss-menu.component';

describe('MossMenuComponent', () => {
  let component: MossMenuComponent;
  let fixture: ComponentFixture<MossMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MossMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MossMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
