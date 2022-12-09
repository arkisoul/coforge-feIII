import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../models/blog/blog';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css'],
})
export class SingleBlogComponent {
  @Input()
  blogItem: Blog;

  @Output('deleteBlog')
  deleteBlogEventEmitter: EventEmitter<number> = new EventEmitter();

  blogStyle = {
    'background-color': 'tomato',
    color: '#212121',
  };

  constructor() {
    this.blogStyle = {
      'background-color': 'purple',
      color: 'white',
    };
  }

  handleBlogDelete(str: any) {
    console.log('[handleBlogDelete]', this.blogItem, str);
    this.deleteBlogEventEmitter.emit(this.blogItem.id);
  }
}
