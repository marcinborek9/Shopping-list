import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public textareaLength = 30;
public inputLength = 10;
public prefrence = false;
public fieldArray: Array<any> = [];
public newAttribute: any = {};
public arr: Array<any> = [];
public userForm: FormGroup;

amounts: any[] = [
  { id: 1, Name: 'gram'},
  { id: 2, Name: 'dag'},
  { id: 3, Name: 'kg'},
  { id: 4, Name: 'szt'},
];
curAmount: any = this.amounts[0];

  addFieldValue() {
    this.newAttribute['isbought'] = false;
    if (this.prefrence === false) {
      this.fieldArray.push(this.newAttribute);
    } else {
      this.fieldArray.unshift(this.newAttribute);
    }
    this.newAttribute = {};
  }

  setPrefrence() {
    this.prefrence = !this.prefrence;
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  setAmount(id: any): void {
    this.curAmount = this.amounts.filter(value => value.id === parseInt(id));
  }

  boughtProduct(i) {
    this.fieldArray[i].isbought = !this.fieldArray[i].isbought;
  }
}
