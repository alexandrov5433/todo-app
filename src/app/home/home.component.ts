import { Component, inject } from "@angular/core";
import { ItemComponent } from "../item/item.component";
import { ItemService } from "../items.service";
import { Item } from "../item";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ItemComponent]
})
export class HomeComponent {
    items: Item[] | undefined;
    itemService: ItemService = inject(ItemService);
    constructor() {
        this.items = this.itemService.getAllItems();
        console.log(this.items);
        
    }
}