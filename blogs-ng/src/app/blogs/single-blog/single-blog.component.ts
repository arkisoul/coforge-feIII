import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog/blog';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css'],
})
export class SingleBlogComponent {
  @Input()
  blogItem?: Blog;

  @Output('deleteBlog')
  deleteBlogEventEmitter: EventEmitter<number> = new EventEmitter();
  today = new Date();

  blogStyle = {
    'background-color': 'tomato',
    color: '#212121',
  };

  constructor(private router: Router) {
    this.blogStyle = {
      'background-color': 'purple',
      color: 'white',
    };
  }

  handleBlogDelete(str: any) {
    console.log('[handleBlogDelete]', this.blogItem, str);
    this.deleteBlogEventEmitter.emit(this.blogItem?.id);
  }

  navigateToDetail() {
    this.router.navigate([`/blogs`, this.blogItem?.id]);
  }
}
