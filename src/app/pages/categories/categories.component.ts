import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  title = 'Categories';

  categories = [
    {title: '1.0 COLLISION AVOIDANCE', text: 'sdsdsdsds', cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '2.0 VISUAL SIGNALS' , text: 'sdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '3.0 COMMUNICATIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '4.0 AERODROMES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '5.0 EQUIPMENT' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '6.0 PILOT RESPONSIBILITIES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '7.0 WAKE TURBULENCE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '8.0 AEROMEDICAL' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '9.0 FLIGHT PLANS AND FLIGHT ITINERARIES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '10.0 CLEARANCES AND INSTRUCTIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '11.0 AIRCRAFT OPERATIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '12.0 REGULATIONS - GENERAL AIRSPACE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '13.0 CONTROLLED AIRSPACE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '14.0 AVIATION OCCURRENCES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '15.0 PIE CHOICES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
  ];


}
