import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, AppRoutingModule, CKEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
