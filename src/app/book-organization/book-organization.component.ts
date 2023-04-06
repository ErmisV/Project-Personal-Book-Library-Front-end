import { Component, OnInit} from '@angular/core';
import { YCConfig } from '@iomechs/angular-year-calendar';

@Component({
  selector: 'app-book-organization',
  templateUrl: './book-organization.component.html',
  styleUrls: ['./book-organization.component.css']
})
export class BookOrganizationComponent implements OnInit {

  ngOnInit(): void {

  }

myCalendarConfig: YCConfig;
currentDate: Date;
eventDayClickHandler($event: any) {
throw new Error('Method not implemented.');
}
viewYearChangedHandler($event: any) {
throw new Error('Method not implemented.');
}
isLoadingData: boolean;

 

}
