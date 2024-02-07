import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycardComponent } from './daycard.component';

describe('DaycardComponent', () => {
  let component: DaycardComponent;
  let fixture: ComponentFixture<DaycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaycardComponent]
    });
    fixture = TestBed.createComponent(DaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
