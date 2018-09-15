import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireComponentComponent } from './hire-component.component';

describe('HireComponentComponent', () => {
  let component: HireComponentComponent;
  let fixture: ComponentFixture<HireComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
