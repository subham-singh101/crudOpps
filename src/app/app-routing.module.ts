import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { EditStudentComponent } from "./components/edit-student/edit-student.component";
import { StudentsListComponent } from "./components/students-list/students-list.component";
import { from } from 'rxjs';

const routes: Routes = [
  { path : '', pathMatch : 'full', redirectTo : 'add-student' },
  { path : 'add=student', component : AddStudentComponent },
  { path : 'edit-student/:id', component : EditStudentComponent },
  { path : 'student-list', component : StudentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
