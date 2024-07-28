import {Component} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {ValueService} from "../service/value.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-selected-customer-list',
  standalone: true,
  imports: [
    CustomerComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './selected-customer-list.component.html',
  styleUrl: './selected-customer-list.component.css'
})
export class SelectedCustomerListComponent {
  selectedCustomerList: { id: string, name: string, selected: boolean }[] = [];
  customerList: { id: string, name: string, selected: boolean }[] = [];
  selectedCount = 0;

  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(value => {
        if (value !== null) {
          this.customerList = value;
          this.selectedCount = 0;
          this.customerList.forEach(customer => {
            if (customer.selected) this.selectedCount++
          });
        }
      }
    );
  }


}
