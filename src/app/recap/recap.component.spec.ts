import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfirmComponent } from './recap.component';

describe('ClientConfirmComponent', () => {
  let component: ClientConfirmComponent;
  let fixture: ComponentFixture<ClientConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
