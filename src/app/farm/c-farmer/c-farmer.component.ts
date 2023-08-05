import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-farmer',
  templateUrl: './c-farmer.component.html',
  styleUrls: ['./c-farmer.component.scss'],
})
export class CFarmerComponent implements OnInit {
  farmerForm!: FormGroup;
  id: any;

  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute,) {}
  
  ngOnInit() {
    this.farmerForm = this.fb.group({
      First_Name: ['', [Validators.required]],
      Last_Name: ['', [Validators.required]],
      Father_Name: ['', [Validators.required]],
      Mobile_Number1: ['', [Validators.required]],
      Farmer_Photo_Id: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Supervisor_Id: [''],
      Tally_FarmerCode: ['', [Validators.required]],
    });

    this.id=this.activatedroute.snapshot.params['id'];
    console.log('id : ', this.id);
  }

  submitForm() {
    console.log(this.farmerForm.value);
  }
}
