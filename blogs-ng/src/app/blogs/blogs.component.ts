import { Component, OnInit } from '@angular/core';

import { Blog } from './models/blog/blog';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  pageTitle: string = 'Blogs';
  blogs: Blog[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs = this.blogsService.fetchBlogs();
  }

  handleBlogClick() {
    console.log('[handleBlogClick]');
  }

  onDeleteBlog(id: number) {
    console.log('[onDeleteBlog]', id);
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
  }
}
