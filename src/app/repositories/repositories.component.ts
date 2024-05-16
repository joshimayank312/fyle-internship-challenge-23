// repositories.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnChanges {
  @Input() username?: string;
  profile: any = {}; // Change profilePictureUrl to profile object
  repositories: any[] = [];
  isLoading: boolean = false;
  page: number = 1;
  perPage: number = 10;
  pageSizes: number[] = [10, 20, 50, 100];

  constructor(private githubService: GithubService) {}

  ngOnChanges() {
    if (this.username) {
      this.fetchProfileAndRepos();
    }
  }

  fetchProfileAndRepos() {
    this.fetchProfile();
    this.fetchRepos();
  }

  fetchProfile() {
    this.githubService.getUser(this.username!).subscribe(
      (user) => {
        this.profile = user;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  fetchRepos() {
    this.isLoading = true;
    if (this.username) {
      this.githubService
        .getUserRepos(this.username, this.page, this.perPage)
        .subscribe(
          (repos) => {
            this.repositories = repos;
            this.isLoading = false;
          },
          (error) => {
            console.error('Error fetching repos:', error);
            this.repositories = [];
            this.isLoading = false;
          }
        );
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchRepos();
    }
  }

  nextPage() {
    this.page++;
    this.fetchRepos();
  }
}
