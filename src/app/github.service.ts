// github.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  getUserRepos(
    username: string,
    page: number,
    perPage: number
  ): Observable<any> {
    const url = `${this.apiUrl}/users/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }
}
