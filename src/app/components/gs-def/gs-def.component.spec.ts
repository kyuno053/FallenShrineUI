import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsDefComponent } from './gs-def.component';

describe('GsDefComponent', () => {
  let component: GsDefComponent;
  let fixture: ComponentFixture<GsDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
