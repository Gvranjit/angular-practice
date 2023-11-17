import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/add-post.service';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.scss'],
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.addPost('asdfasdf', 'asdfsadf');
  }
}
