import { Injectable } from "@angular/core";
import { Item } from "./item";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    itemsList: Item[] = [
        {
            id: "1",
            task: "Some text here.",
            deadline: '23423412341234'
        },
        {
            id: "2",
            task: "Some text here. sdfsdfsd ggfsd",
            deadline: '23423412341234'
        },
        {
            id: "3",
            task: "Some text here. dgsdgfdsgfdsfgdsfgd",
            deadline: '23423412341234'
        },
        {
            id: "4",
            task: "Some text here. gsdfgsdfgdsfgdgfsdgdsfgsdfgsdgffgdsdbsdbdbsdbsd",
            deadline: '23423412341234'
        },
        {
            id: "5",
            task: "Some text here. sbfbsd",
            deadline: '23423412341234'
        }
    ];
    // itemsList: Item[] = [];

    constructor() {};

    getAllItems(): Item[] | undefined {
        return this.itemsList.length === 0 ? undefined : this.itemsList;
    }

    getItemById(id: string): Item | undefined {
        return this.itemsList.find( el => el.id === id);
    }
}