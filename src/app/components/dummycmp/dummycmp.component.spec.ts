import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycmpComponent } from './dummycmp.component';

describe('DummycmpComponent', () => {
  let component: DummycmpComponent;
  let fixture: ComponentFixture<DummycmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummycmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummycmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
