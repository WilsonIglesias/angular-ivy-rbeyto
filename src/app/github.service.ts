import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Repo {}

@Injectable()
export class GithubService {
  repos: Array<Repo> = [];

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Array<Repo>>('https://api.github.com/users/larguesa/repos')
      .subscribe((data) => {
        this.repos = data;
      });
  }
}
