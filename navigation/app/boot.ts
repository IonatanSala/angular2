import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {BlogService} from './blog/blog.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, BlogService]);
