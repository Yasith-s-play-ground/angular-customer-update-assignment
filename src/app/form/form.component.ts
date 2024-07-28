import {Component} from '@angular/core';
import {ValueService} from "../service/value.service";

class Customer {
  constructor(id: string, name: string) {

  }

}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private valueService: ValueService) {

  }

  updateValue(id: string, name: string) {
    this.valueService.updateValue({
      id: id,
      name: name,
      selected: false
    });

  }
}
