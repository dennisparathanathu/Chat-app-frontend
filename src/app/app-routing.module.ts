import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatareaComponent } from './chat/chatarea/chatarea.component';
import { NewsidebarComponent } from './chat/newsidebar/newsidebar.component'
import { SideprofileComponent } from './chat/sideprofile/sideprofile.component';


const routes: Routes = [
  
  {path: 'register', component:RegisterComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'updateprofile',component:ProfileComponent},
  {path: 'chat',component:ChatComponent,
children:[
  {path: 'viewprofile/:id', component:SideprofileComponent},
  {path: 'chatarea', component:ChatareaComponent},
  {path: 'sidebar', component:NewsidebarComponent}

] },
  {path: 'addcontact',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
