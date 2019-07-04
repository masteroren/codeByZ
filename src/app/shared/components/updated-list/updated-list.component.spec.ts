import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedListComponent } from './updated-list.component';

describe('UpdatedListComponent', () => {
  let component: UpdatedListComponent;
  let fixture: ComponentFixture<UpdatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
