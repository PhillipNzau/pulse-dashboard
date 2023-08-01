import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../shared/components/item-card/item-card.component";
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, ItemCardComponent, ChartModule]
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

}
