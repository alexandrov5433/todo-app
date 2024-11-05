import { Component, Input } from "@angular/core";
import { Item } from "../item";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-item',
    standalone: true,
    templateUrl: './item.component.html',
    styleUrl: './item.component.css',
    imports: [RouterLink]
})
export class ItemComponent {
    @Input('item') item!: Item;
}