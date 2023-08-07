import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../shared/components/modal/modal.component";
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { ItemCardComponent } from "../shared/components/item-card/item-card.component";
import { ExportDropdownComponent } from "../shared/components/export-dropdown/export-dropdown.component";

import * as dayjs from 'dayjs'
import { DropdownOption } from '../shared/models/dropdownModel';
import { DateRangePickerComponent } from '../shared/components/date-range-picker/date-range-picker.component';
import { Chart,ChartModule } from 'angular-highcharts';

@Component({
    selector: 'app-meters',
    standalone: true,
    templateUrl: './meters.component.html',
    styleUrls: ['./meters.component.scss'],
    imports: [CommonModule, ModalComponent, DropdownComponent, ItemCardComponent, ExportDropdownComponent, ChartModule, DateRangePickerComponent]
})
export class MetersComponent {
  filterText:string =  'all'
  showDeleteModal:boolean = false;
  showEditModal:boolean =false;
  showAddModal:boolean =false;
  meterSelected:boolean = false;

  selectMeter() {
    this.meterSelected = !this.meterSelected;    
  }

  closeModal(): void {
    
    this.showAddModal = false;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }

  filterTable(filter:string) {
    this.filterText = filter
  }

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
