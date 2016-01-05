import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {BlogService, BlogPost} from '../blog.service';

@Component({
  templateUrl: 'app/blog/blog-post/blog-post.html'
})
export class BlogPostComponent implements OnInit{
  public blogPost: BlogPost;

  constructor(
      private _router: Router,
      private _routeParams: RouteParams,
      private _blogService: BlogService
  ) { }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this.blogPost = this._blogService.getBlog(id);
  }

}
