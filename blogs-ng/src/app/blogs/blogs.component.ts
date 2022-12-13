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
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogsService.fetchBlogs().subscribe((blogs: Blog[]) => this.blogs = blogs);
  }

  handleBlogClick() {
    console.log('[handleBlogClick]');
  }

  onDeleteBlog(id: number) {
    this.blogsService.deleteBlog(id);
    this.fetchBlogs();
  }
}
