import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Building } from '../../../../models/building';

@Component({
  selector: 'app-building-item',
  standalone: true,
  imports: [],
  templateUrl: './building-item.component.html',
  styleUrl: './building-item.component.scss'
})
export class BuildingItemComponent {
  @Input() building: Building = new Building();
  @Output() pushBuildingIdEvent = new EventEmitter<number>();
  @HostListener('click')
  onClick() {
    this.pushBuildingIdEvent.emit(this.building.id);
  }
}
