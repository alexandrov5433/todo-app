import { Component, inject } from "@angular/core";
import { ItemComponent } from "../item/item.component";
import { ItemService } from "../items.service";
import { Item } from "../item";
import { RouterLink, Router } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ItemComponent, RouterLink]
})
export class HomeComponent {
    items: Item[] | undefined;
    itemService: ItemService = inject(ItemService);
    router = new Router();
    constructor() {
        this.items = this.itemService.getAllItems();
    }

    goToAddNewTask() {
        this.router.navigate(['add']);
    }
}