import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  githubUsername: string = '';

  onSearch(username: string) {
    this.githubUsername = username;
  }
}
