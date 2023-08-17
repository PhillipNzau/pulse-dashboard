import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../shared/components/item-card/item-card.component";
import { Chart, ChartModule } from 'angular-highcharts';
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { DropdownOption } from '../shared/models/dropdownModel';
import { DateRangePickerComponent } from "../shared/components/date-range-picker/date-range-picker.component";
import * as dayjs from 'dayjs'
import { ExportDropdownComponent } from "../shared/components/export-dropdown/export-dropdown.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, ItemCardComponent, ChartModule, DropdownComponent, DateRangePickerComponent, ExportDropdownComponent]
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
        { label: 'This Year', value: [dayjs(), dayjs()] },
        { label: '2022', value: [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')] },
        { label: '2021', value: [dayjs().subtract(6, 'days'), dayjs()] },
        { label: '2020', value: [dayjs().subtract(29, 'days'), dayjs()] },
        { label: '2019', value: [dayjs().startOf('month'), dayjs().endOf('month')] },
        { label: '2018', value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')] },
      ];
      constructor(
      
      ) {}

      onExportOptionSelected(optionValue: any) {
        console.log('Selected Option Value:', optionValue);
      }
    
      onOptionSelected(optionValue: any) {
        console.log('Selected Option Value:', optionValue);
        
      }
      onDateSelect(date:any) {

        console.log('Selected Date Value:', date);
      }

}
