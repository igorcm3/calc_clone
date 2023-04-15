import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsetComponent } from './toolset.component';

describe('ToolsetComponent', () => {
  let component: ToolsetComponent;
  let fixture: ComponentFixture<ToolsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
