import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllRegistrationRequestService } from './service/get-all-registration-request.service';
import { Subject, delay, of, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-company-employee-registration-request',
  templateUrl: './company-employee-registration-request.component.html',
  styleUrls: ['./company-employee-registration-request.component.css']
})
export class CompanyEmployeeRegistrationRequestComponent implements OnInit,OnDestroy {

  constructor(private getData:GetAllRegistrationRequestService){}
  allRegistrationRequests:Array<any> =[]
  length:number=0
  destroyed = new Subject()


  ngOnInit(): void {
    const service = this.getData.fetchData()
    service
    .pipe(
        takeUntil(this.destroyed)
      )
    .subscribe(data=>{
      this.length=data.length
      this.allRegistrationRequests=data
    })
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  

}
