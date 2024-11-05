import { Component, inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Item } from "../item";
import { ItemService } from "../items.service";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'app-editing',
    standalone: true,
    templateUrl: './editing.component.html',
    styleUrl: './editing.component.css',
    imports: [ReactiveFormsModule]
})
export class EditingComponent {
    router: Router = new Router();
    route: ActivatedRoute = inject(ActivatedRoute);
    itemService: ItemService = inject(ItemService);
    item: Item | undefined;
    id: string;
    editForm = new FormGroup({
        task: new FormControl(''),
        deadline: new FormControl('')
    });
    constructor() {
        this.id = this.route.snapshot.paramMap.get('id') ?? '';
        this.item = this.itemService.getItemById(this.id);
    }

    editTask() {
        this.itemService.editTask(
            this.id,
            this.editForm.value.task ?? '',
            this.editForm.value.deadline ?? ''
        );
        this.router.navigate(['']);
    }

    cancelEditing() {
        this.router.navigate(['']);
    }
}