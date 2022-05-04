import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPreferenceComponent } from './communication-preference.component';

describe('CommunicationPreferenceComponent', () => {
  let component: CommunicationPreferenceComponent;
  let fixture: ComponentFixture<CommunicationPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
