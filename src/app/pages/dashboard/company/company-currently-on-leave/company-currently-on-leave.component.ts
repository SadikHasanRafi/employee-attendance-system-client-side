import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-currently-on-leave',
  templateUrl: './company-currently-on-leave.component.html',
  styleUrls: ['./company-currently-on-leave.component.css']
})
export class CompanyCurrentlyOnLeaveComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}
  leaveRequests: unknown

  ngOnInit(): void {
    this.subscription = this.http.get('https://restcountries.com/v3.1/all').subscribe(
      (data) => {
        this.leaveRequests = data;
        console.log('Data from API:', data);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
