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

  notSelectedCustomerList: { id: string, name: string, selected: boolean }[] = [];


  // @ViewChild('container', {read: ViewContainerRef}) containerRef!: ViewContainerRef;
  //
  constructor() {
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerComponent);

    this.valueService.getValue().subscribe(value => {
      if (value !== null && value.id !== '' && value.name !== '' && !value.selected) {
        this.notSelectedCustomerList.push(value);
      }
    });

    // this.valueService.getValue().subscribe(
    //   value => {
    //     // const componentRef = this.containerRef.createComponent(componentFactory);
    //     // componentRef.id=value.id;
    //   }
    // )

  }


}
