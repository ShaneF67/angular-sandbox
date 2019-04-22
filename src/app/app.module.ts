import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavouriteComponent,
    TitleCasingComponent,
    FormatTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
