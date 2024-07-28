import {Component, ComponentFactoryResolver, inject, ViewChild, ViewContainerRef} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {ValueService} from "../service/value.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CustomerComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  valueService: ValueService = inject(ValueService);

  // notSelectedCustomerList: { id: string, name: string, selected: boolean }[] = [];
  customerList: { id: string, name: string, selected: boolean }[] = [];
  selectedCount = 0;

  constructor() {

    this.valueService.getValue().subscribe(value => {
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
