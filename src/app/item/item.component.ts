import { Component, Input } from "@angular/core";
import { Item } from "../item";


@Component({
    selector: 'app-item',
    standalone: true,
    templateUrl: './item.component.html',
    styleUrl: './item.component.css'
})
export class ItemComponent {
    @Input('item') item!: Item;
}