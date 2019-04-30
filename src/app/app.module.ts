import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorsService } from './services/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AuthorsComponent,
    FavouriteComponent,
    TitleCasingComponent,
    FormatTitlePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
