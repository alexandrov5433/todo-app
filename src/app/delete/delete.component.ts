import { Component } from "@angular/core";
import { ItemService } from "../items.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-delete',
    standalone: true,
    templateUrl: './delete.component.html',
    styleUrl: './delete.component.css',
    providers: [ItemService]
})
export class DeleteComponent {
    id: string | undefined;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService
    ) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    }

    confirmDelete() {
        console.log(this.id);
        
        this.itemService.deleteTaskById(this.id ?? '');
        this.router.navigate(['']);
    }

    cancelDelete() {
        this.router.navigate(['']);
    }
}