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

  customerList: { id: string, name: string, selected: boolean }[] = [];


  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(
      customerList => {
        this.customerList = customerList;
      }
    );
  }

  changeCustomerSelection() {
    this.customerList.forEach(customer => {
      if (customer.id === this.id) {
        customer.selected = !customer.selected;
      }
    });

    this.valueService.updateValue(
      this.customerList
      // {
      // id: this.id,
      // name: this.name,
      // selected: !this.selected

      // }
    );
  }

  removeCustomer() {
    let index = this.customerList.findIndex((customer) => customer.id === this.id);
    this.customerList.splice(index, 1); /* remove the customer from list */
    this.valueService.updateValue(this.customerList); /* update value service */
  }
}
