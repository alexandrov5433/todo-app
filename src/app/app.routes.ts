import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddingComponent } from './adding/adding.component';
import { EditingComponent } from './editing/editing.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'TODO - Home'
    },
    {
        path: 'add',
        component: AddingComponent,
        title: 'TODO - Add New Task'
    },
    {
        path: 'edit/:id',
        component: EditingComponent,
        title: 'TODO - Edit Task'
    },
    {
        path: 'delete/:id',
        component: DeleteComponent,
        title: 'TODO - Delete Task'
    }
];
