import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SmartadminGalleryModule } from '../../shared/ui/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SmartadminGalleryModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule { }
