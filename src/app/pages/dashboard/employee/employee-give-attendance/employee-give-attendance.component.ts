import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-employee-give-attendance',
  templateUrl: './employee-give-attendance.component.html',
  styleUrls: ['./employee-give-attendance.component.css']
})
export class EmployeeGiveAttendanceComponent implements OnInit {
  currentTime: string="";
  currentHour: number=0;
  currentMinute: number=0;
  currentSecond: number=0;
  currentDate:unknown

  
  
  
  ngOnInit(): void {


    this.updateCurrentTime();
    const obs$ = interval(1000);
    obs$.subscribe(() => {
      this.updateCurrentTime();
    });
  }

  updateCurrentTime(): void {
    const now = moment();
    this.currentTime = now.format("h:mm:ss a");
    this.currentHour = now.hour();
    this.currentMinute = now.minute();
    this.currentSecond = now.second();
    this.currentDate = now.format("dddd, DD MMMM YYYY")
  }

  handleGiveAttendance(time:unknown,date:unknown){
  console.log("🚀 ~ file: employee-give-attendance.component.ts:40 ~ EmployeeGiveAttendanceComponent ~ handleGiveAttendance ~ date:", date)
  console.log("🚀 ~ file: employee-give-attendance.component.ts:41 ~ EmployeeGiveAttendanceComponent ~ handleGiveAttendance ~ time:", time)
    console.log("present")
  }

}
