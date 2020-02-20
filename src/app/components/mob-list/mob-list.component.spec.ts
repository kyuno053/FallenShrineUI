import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobListComponent } from './mob-list.component';

describe('MobListComponent', () => {
  let component: MobListComponent;
  let fixture: ComponentFixture<MobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
