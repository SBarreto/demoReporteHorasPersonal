import { Component, OnInit } from '@angular/core';
import { JsonPost } from '../json-post';
import { CreateHorasServiceService } from '../horas-extra-create/create-horas-service.service';

@Component({
  selector: 'app-json-posts-view',
  templateUrl: './json-posts-view.component.html',
  styleUrls: ['./json-posts-view.component.css']
})
export class JsonPostsViewComponent implements OnInit {

posts: JsonPost[] = []

  constructor(private reportesService: CreateHorasServiceService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.reportesService.getJsonPosts()
    .subscribe(data => {
      this.posts = JSON.parse(JSON.stringify(data));
      console.log('posts encontrados: ');
      console.log(this.posts);
    }), error => {
      console.log(error);
    }
    }

}
