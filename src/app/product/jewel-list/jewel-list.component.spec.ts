import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelListComponent } from './jewel-list.component';

describe('JewelListComponent', () => {
  let component: JewelListComponent;
  let fixture: ComponentFixture<JewelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
