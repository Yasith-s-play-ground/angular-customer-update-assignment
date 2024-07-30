import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  selected = false;

  private valueSubject: BehaviorSubject<{ id: string, name: string, selected: boolean }[]> =
    // new BehaviorSubject({id: "", name: "", selected: this.selected});
    new BehaviorSubject([{id: "", name: "", selected: this.selected}]);

  private totalSubject = new BehaviorSubject<number>(0);

  constructor() {
    console.log("Value Service Created");
  }

  public getValue(): Subject<{ id: string, name: string, selected: boolean }[]> {
    return this.valueSubject;
  }

  public updateValue(value: { id: string, name: string, selected: boolean }[]) {
    this.valueSubject.next(value);    // notify
    //table will be updated even if we don't notify, as all components refer same list
    //but total will not be updated in app component as we don't run update
    //if not we have to create total in service and let app component subscribe
  }
}
