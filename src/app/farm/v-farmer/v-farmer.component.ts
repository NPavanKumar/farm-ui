import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { FormBuilder } from '@angular/forms';
import { tap } from 'rxjs';
import { Farmers, FarmersColumn } from '../interface/farmers';
@Component({
  selector: 'app-v-farmer',
  templateUrl: './v-farmer.component.html',
  styleUrls: ['./v-farmer.component.scss'],
})
export class VFarmerComponent implements OnInit {
  farmers: any;
  dataList: any[] = [];
  isLoading: boolean = false;
  quickViewVisible: boolean = false;
  listOfColumns: FarmersColumn[] = [];

  searchText = 'null';
  pageNumber = 1;
  pageSize = 10;
  sortColumn = 'Id';
  sortOrder = 'DESC';
  totalRecordsCount = 0;
  searchValue = '';

  constructor(private FarmService: FarmService, private fb: FormBuilder) {}

  ngOnInit() {
    this.configureColumns();
    this.fetchData();
  }

  configureColumns() {
    this.listOfColumns = [
      {
        name: 'First_Name',
        displayName: 'Name',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Father_Name',
        displayName: 'Father Name',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Mobile_Number1',
        displayName: 'Mobile Number1',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Farmer_Photo_Id',
        displayName: 'Farmer Photo',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Mobile_Number2',
        displayName: 'Mobile Number2',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Banking_Id',
        displayName: 'Banking Id',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Email',
        displayName: 'Email',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Supervisor_Id',
        displayName: 'Supervisor',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
      {
        name: 'Tally_FarmerCode',
        displayName: 'Tally FarmerCode',
        width: '20%',
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: true,
        showFilter: false,
      },
    ];
  }

  fetchData() {
    this.isLoading = true;
    this.FarmService.searchFarmers(
      this.searchText,
      this.pageNumber,
      this.pageSize,
      this.sortColumn,
      this.sortOrder
    )
      .pipe(
        tap((elem: any) => {
          this.isLoading = true;
        })
      )
      .subscribe({
       next: (data: any) =>{
          this.dataList = data.data;
            this.totalRecordsCount = data.TotalRecordsCount;
            this.isLoading = false;
        },
        error: (err: any) => {
          this.isLoading = false;
        }
      }
        // (data: any) => {
        //   this.dataList = data.data;
        //   this.totalRecordsCount = data.TotalRecordsCount;
        //   this.isLoading = false;
        // },
        // (error: any) => {
        //   this.isLoading = false;
        //   // this.notification.create(
        //   //   'error',
        //   //   'Error',
        //   //   FarmConstants.FetchFarmersErrorMessage
        //   // );
        // }
      );
  }

  delete(data: any) {
    console.log('data: ', data);
  }
}
