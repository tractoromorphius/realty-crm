import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-building-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './building-form.component.html',
  styleUrl: './building-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  buildingForm = this.formBuilder.group({
    address: [''],
    floors: [''],
    area: [''],
  });
}
