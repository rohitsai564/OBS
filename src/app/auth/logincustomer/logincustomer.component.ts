import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
onLogin() {
throw new Error('Method not implemented.');
}
msg: any;
loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
