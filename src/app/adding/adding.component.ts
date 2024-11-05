import { Component, inject } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { ItemService } from "../items.service";

@Component({
    selector: 'app-adding',
    standalone: true,
    templateUrl: './adding.component.html',
    styleUrl: './adding.component.css',
    imports: [RouterLink, ReactiveFormsModule]
})
export class AddingComponent {
    itemService: ItemService = inject(ItemService);
    taskForm = new FormGroup({
        description: new FormControl(''),
        deadline: new FormControl('')
    });
    router = new Router();
    addNewTask() {
        this.itemService.addNewItem(
            this.taskForm.value.description ?? '',
            this.taskForm.value.deadline ?? ''
        );
        this.router.navigate(['']);
    }
    canselTaskAdding() {
        console.log('calcel');
        this.router.navigate(['']);
    }
}