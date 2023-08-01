import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../shared/components/item-card/item-card.component";
import { Chart, ChartModule } from 'angular-highcharts';
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { DropdownOption } from '../shared/models/dropdownModel';
import { DateRangePickerComponent } from "../shared/components/date-range-picker/date-range-picker.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, ItemCardComponent, ChartModule, DropdownComponent, DateRangePickerComponent]
})
export class HomeComponent {

    chart = new Chart({
        chart: {
          type: 'column'
        },
        title: {
            text: ''
        },
        
        credits: {
          enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          yAxis: {
            title: {
              text: 'Value',
            },
          },
        series: [
          {
            name: 'Data',
            data: [10, 5, 15, 8, 12, 20, 10,3,8,10,50,60],
          } as any
        ]
      });

      dropdownOptions: DropdownOption[] = [
        { label: 'Today', value: 1 },
        { label: 'This Week', value: 2 },
        { label: 'Last Week', value: 3 },
        { label: 'This Month', value: 3 },
        { label: 'Last Month', value: 3 },
        { label: 'This Year', value: 3 },
      ];
    
      onOptionSelected(optionValue: any) {
        console.log('Selected Option Value:', optionValue);
        // Perform any other actions you want to take when an option is selected.
      }

}
