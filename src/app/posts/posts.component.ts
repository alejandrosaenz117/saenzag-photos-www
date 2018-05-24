import { Component, OnInit } from '@angular/core';
import  { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getPosts();
    console.log("here1")
  }

  getPosts(): void {
    this.appService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log("here");
    });
  }

}
