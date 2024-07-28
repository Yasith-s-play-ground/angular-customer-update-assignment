import {Component, Input} from '@angular/core';
import {ValueService} from "../service/value.service";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  @Input()
  id: string = '';

  @Input()
  name: string = '';

  @Input()
  selected: boolean = false;

  constructor(private valueService: ValueService) {
    // valueService.getValue().subscribe();
  }

  moveToSelectedCustomerList() {
    this.valueService.updateValue({
      id: this.id,
      name: this.name,
      selected: !this.selected
    });
  }
}
