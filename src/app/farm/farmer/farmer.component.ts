import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent  implements OnInit {

  farmers: any;
  
  constructor() { }

  ngOnInit() {}

  delete(data: any) {
console.log('data: ', data);
  }

}
