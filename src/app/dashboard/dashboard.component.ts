import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    standalone:true,
    templateUrl:'./dashboard.component.html',
    imports: [CommonModule, RouterOutlet]
})
export class DashboardComponent {

}