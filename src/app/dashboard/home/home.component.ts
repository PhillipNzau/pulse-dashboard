import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../shared/components/item-card/item-card.component";
import { Chart, ChartModule } from 'angular-highcharts';
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { DropdownOption } from '../shared/models/dropdownModel';
import { DateRangePickerComponent } from "../shared/components/date-range-picker/date-range-picker.component";
import * as dayjs from 'dayjs'

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
        { label: 'Today', value: [dayjs(), dayjs()] },
        { label: 'Yesterday', value: [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')] },
        { label: 'Last 7 Days', value: [dayjs().subtract(6, 'days'), dayjs()] },
        { label: 'Last 30 Days', value: [dayjs().subtract(29, 'days'), dayjs()] },
        { label: 'This Month', value: [dayjs().startOf('month'), dayjs().endOf('month')] },
        { label: 'Last Month', value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')] },
      ];
     
    
      onOptionSelected(optionValue: any) {
        console.log('Selected Option Value:', optionValue);
        // Perform any other actions you want to take when an option is selected.
      }
      onDateSelect(date:any) {

        console.log('Selected Date Value:', date);
      }

}
