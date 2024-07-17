import { Component, HostListener } from '@angular/core';
import { BuildingItemComponent } from './building-item/building-item.component';
import { Building } from '../../../models/building';

@Component({
  selector: 'app-buildings',
  standalone: true,
  imports: [BuildingItemComponent],
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.scss'
})
export class BuildingsComponent {
  readonly buildings: Building[] = [
    {id: 1, address: "тесттовская", floorCount: 10},
    {id: 2, address: "тесттовская", floorCount: 10},
    {id: 3, address: "тесттовская", floorCount: 10},
    {id: 4, address: "тесттовская", floorCount: 10},
    {id: 5, address: "тесттовская", floorCount: 10},
    {id: 6, address: "тесттовская", floorCount: 10},
    {id: 7, address: "тесттовская", floorCount: 10},
    {id: 8, address: "тесттовская", floorCount: 10},
    {id: 9, address: "тесттовская", floorCount: 10},
    {id: 10, address: "тесттовская", floorCount: 10},
    {id: 11, address: "тесттовская", floorCount: 11},
  ];

  goToBuildingPage(id: number) {
    console.log(id);
  };
}
