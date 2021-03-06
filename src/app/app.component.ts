import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customerservice';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  customers: any;

  totalRecords: number;

  cols: any[];

  loading: boolean;

  representatives: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.loading = true;
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      console.log('loadCustomers : ', event);
      this.customerService
        .getCustomers({ lazyEvent: JSON.stringify(event) })
        .then(res => {
          this.customers = res.customers;
          this.totalRecords = res.totalRecords;
          this.loading = false;
        });
    }, 1000);
  }
}
