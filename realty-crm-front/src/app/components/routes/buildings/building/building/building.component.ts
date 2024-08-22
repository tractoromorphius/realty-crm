import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BuildingFormComponent } from '../../../../building-form/building-form.component';

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [ReactiveFormsModule, BuildingFormComponent],
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingComponent {
  openTab: string = "default";

  tabsRadio = new FormControl('main');
  tabsList = [
    {name: 'main', label: 'Главная'},
    {name: 'photo', label: 'Фотографии'},
    {name: 'docments', label: 'Документы'},
    {name: 'other', label: 'Разное'},
  ]
}
