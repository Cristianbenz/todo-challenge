import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-add-todo-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './add-todo-button.component.html',
  styleUrls: ["./add-todo-button.component.scss"]
})
export class AddToDoButtonComponent {
  private _dialogRef = inject(MatDialog);

  openForm() {
    /* 
      Open the dialog with the form to create a new to do.
    */
    this._dialogRef.open(ToDoFormComponent)
  }
}
