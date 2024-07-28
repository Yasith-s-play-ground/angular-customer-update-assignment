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

  constructor(private valueService: ValueService) {
    valueService.getValue().subscribe(value => {
        if (value !== null && value.id !== '' && value.name !== '' && value.selected) {
          this.selectedCustomerList.push(value);
        }
      }
    );
  }

}
