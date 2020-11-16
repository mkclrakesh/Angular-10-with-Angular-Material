import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MainContentComponent } from './components/main-content.component';
import { SidenavComponent } from './components/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes , RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
const routes: Routes = [

  {
    path: '', component: ContactmanagerAppComponent ,
  children : [
    { path: ':id', component: MainContentComponent },
    {path: '', component: MainContentComponent}
  ]
},
  {path: '**' , redirectTo: 'contactmanager'}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ UserService ]
})
export class ContactmanagerModule { }
