import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingItemComponent } from './building-item.component';

describe('BuildingItemComponent', () => {
  let component: BuildingItemComponent;
  let fixture: ComponentFixture<BuildingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
