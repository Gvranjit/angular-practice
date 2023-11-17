import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  addPost(title: string, description: string) {
    this.http
      .post('https://ngpracticeproject-default-rtdb.firebaseio.com/post', {
        title: 'Posttitle',
        description: 'SOME DESCRIPTION',
      })
      .subscribe((res) => console.log(res));
  }
}
