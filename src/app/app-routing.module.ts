import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './routing.constants';
import { PipingAssignmentComponent } from './piping-assignment/piping-assignment.component';
import { ReactiveFormsAssignmentComponent } from './reactive-forms-assignment/reactive-forms-assignment.component';

const routes: Routes = [
  {
    title: 'PIPING ASSIGNMENT',
    path: RoutePath.PIPING_ASSIGNMENT,
    component: PipingAssignmentComponent,
  },
  {
    title: 'Reactive Forms Assignment',
    path: RoutePath.REACTIVE_FORM_ASSIGNMENT,
    component: ReactiveFormsAssignmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
