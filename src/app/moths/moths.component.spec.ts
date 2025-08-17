import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothsComponent } from './moths.component';

describe('MothsComponent', () => {
  let component: MothsComponent;
  let fixture: ComponentFixture<MothsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MothsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
