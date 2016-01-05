import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {BlogPostComponent} from './blog/blog-post/blog-post.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/blog', name: 'Blog', component: BlogComponent},
  {path: '/blog/:id', name: 'BlogPost', component: BlogPostComponent}
])
export class AppComponent { }
