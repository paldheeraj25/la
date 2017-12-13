import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelComponent } from './jewel.component';

describe('JewelComponent', () => {
  let component: JewelComponent;
  let fixture: ComponentFixture<JewelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
