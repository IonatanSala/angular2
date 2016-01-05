import {Injectable} from 'angular2/core';

@Injectable()
export class BlogService {

  getArticles() {
    return BLOGS;
  }

  getBlog(id) {
    let post: BlogPost;
    BLOGS.forEach((value, key) => {
      if(value.id == id) {
        post = value;
      }
    })

    return post;
  }

}

export interface BlogPost {
  id: number;
  name: string;
  body: string;
}

var BLOGS: BlogPost[] = [
  {id: 1, name: "Article One", body: "This is the first Article"},
  {id: 2, name: "Article Two", body: "This is the second Article"},
  {id: 3, name: "Article Three", body: "This is the third Article"}
]
