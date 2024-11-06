import { Injectable } from "@angular/core";
import { Item } from "./item";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private getData = (): Item[] => {
        return JSON.parse(window.localStorage.getItem('itemsList') ?? '[]');;
    }

    private saveData = (data: Item[]): void => {
        window.localStorage.setItem('itemsList', JSON.stringify(data));
        return;
    }

    private genUId = (): string => {
        return new Date().getTime().toString();
    }

    constructor() {
        const itemList = window.localStorage.getItem('itemsList') ?? false;
        if (!itemList) {
            window.localStorage.setItem('itemsList', JSON.stringify([]));
        }
    };

    getAllItems(): Item[] | undefined {
        const itemsList = this.getData();
        return itemsList.length === 0 ? undefined : itemsList;
    }

    getItemById(id: string): Item | undefined {
        return this.getData().find(el => el.id === id);
    }

    addNewItem(description: string, deadline: string): void {
        const data = this.getData();
        data.push({
            id: this.genUId(),
            task: description,
            deadline: deadline
        });
        return this.saveData(data);
    }

    editTask(id: string, task: string, deadline: string): void {
        const data = this.getData();
        const entry = data.find(el => el.id === id);
        if (entry) {
            Object.assign(entry, { task, deadline });
            this.saveData(data);
        }
    }

    deleteTaskById(id: string): void {
        console.log('Before deletion', this.getData());
        const newTaskList = this.getData().reduce((acc: any, cur: Item) => {
            if (cur.id !== id) {
                acc.push(cur);
                return acc;
            }
            return acc;
        }, []);
        console.log('After deletion', newTaskList);
        this.saveData(newTaskList);
    }
}