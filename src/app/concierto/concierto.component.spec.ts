import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertoComponent } from './concierto.component';

describe('ConciertoComponent', () => {
  let component: ConciertoComponent;
  let fixture: ComponentFixture<ConciertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConciertoComponent]
    });
    fixture = TestBed.createComponent(ConciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
