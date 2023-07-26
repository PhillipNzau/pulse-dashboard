import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from "../shared/item-card/item-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, ItemCardComponent]
})
export class HomeComponent {

}
