import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {BlogService, BlogPost} from './blog.service';

@Component({
  templateUrl: 'app/blog/blog.html'
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor(
    private _router: Router,
    private _blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogPosts = this._blogService.getArticles();
  }

  onSelect(blogPost: BlogPost) {
    this._router.navigate(['BlogPost', {id: blogPost.id }]);
  }
}
