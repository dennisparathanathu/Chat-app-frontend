import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatareaComponent } from './chat/chatarea/chatarea.component';
import { SideprofileComponent } from './chat/sideprofile/sideprofile.component';
import { NewsidebarComponent } from './chat/newsidebar/newsidebar.component';
import { DummycmpComponent } from './components/dummycmp/dummycmp.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ChatComponent,
    ContactsComponent,
    ProfileComponent,
    ChatareaComponent,
    SideprofileComponent,
    NewsidebarComponent,
    DummycmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
