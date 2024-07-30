import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {SelectedCustomerListComponent} from "./selected-customer-list/selected-customer-list.component";
import {FormComponent} from "./form/form.component";
import {ValueService} from "./service/value.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerListComponent, SelectedCustomerListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // notSelectedCustomerList: {}[] = [];
  // selectedCustomerList: {}[] = [];

  customerList: { id: string, name: string, selected: boolean }[] = [];


  total = 0;
  selected = 0;

  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(value => {
        if (value !== null) {
          this.customerList = value;
          this.total = this.customerList.length-1;

          this.selected = 0;
          this.customerList.forEach(customer => {
            if (customer.selected) this.selected++;
          });
        }
      }
    )
  }
}
