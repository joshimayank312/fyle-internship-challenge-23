import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, RepositoriesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
