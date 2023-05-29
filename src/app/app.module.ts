import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { HomeComponent } from './home/home.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { GetImageByTagsComponent } from './get-image-by-tags/get-image-by-tags.component';
import { SearchImageByTagsComponent } from './search-image-by-tags/search-image-by-tags.component';
import { DeleteImageComponent } from './delete-image/delete-image.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignoutComponent,
    HomeComponent,
    UploadImageComponent,
    SearchImageComponent,
    GetImageByTagsComponent,
    SearchImageByTagsComponent,
    DeleteImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
