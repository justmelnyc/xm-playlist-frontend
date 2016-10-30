/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoverartComponent } from './coverart.component';

describe('CoverartComponent', () => {
  let component: CoverartComponent;
  let fixture: ComponentFixture<CoverartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
