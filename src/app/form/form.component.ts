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

  customerList: { id: string, name: string, selected: boolean }[] = [];


  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(value =>
      this.customerList = value);
  }

  updateValue(id: string, name: string) {
    this.customerList.push({
      id: id,
      name: name,
      selected: false
    });
    this.valueService.updateValue(this.customerList);
    console.log(this.customerList);

  }
}
