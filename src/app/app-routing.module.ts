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
import { DummycmpComponent } from './components/dummycmp/dummycmp.component';
import { from } from 'rxjs';


const routes: Routes = [
  
  {path: 'register', component:RegisterComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'updateprofile',component:ProfileComponent},
  {path: 'dummy/:para', component:DummycmpComponent},
  
  {path: 'chat',component:ChatComponent},
  {path: 'chat/:id', component:ChatComponent},
  {path: 'chatarea', component:ChatComponent},
  {path: 'sidebar', component:ChatComponent},
  {path: 'addcontact',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
