import { Component } from '@angular/core';

import { Blog } from './models/blog/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  pageTitle: string = 'Blogs';
  blogs: Blog[] = [];

  constructor() {
    for (let index = 1; index <= 5; index++) {
      this.blogs.push(
        new Blog(index, `Blog ${index}`, `Blog body ${index}`, index % 2 === 1)
      );
    }
  }

  handleBlogClick() {
    console.log('[handleBlogClick]');
  }

  onDeleteBlog(id: number) {
    console.log('[onDeleteBlog]', id);
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
  }
}
