import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeatlandsComponent } from './peatlands.component';

describe('PeatlandsComponent', () => {
  let component: PeatlandsComponent;
  let fixture: ComponentFixture<PeatlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeatlandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeatlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
