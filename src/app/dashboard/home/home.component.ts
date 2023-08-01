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
          type: 'bar'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
          },
          yAxis: {
            title: {
              text: 'Value',
            },
          },
        series: [
          {
            name: 'Data',
            data: [10, 5, 15, 8, 12],
          } as any
        ]
      });

}
