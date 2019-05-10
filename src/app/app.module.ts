import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsService } from './services/authors.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { PostsComponent } from './posts-component/posts-component.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component'
import { NotFoundComponent } from './not-found/not-found.component';

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
    ChangePasswordComponent,
    PostsComponent,
    GithubUsersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }, 
      {
        path: 'followers/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubUsersComponent
      },
      {
        path: '**', //Wildcard - Catches any URL in the address bar
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthorsService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
