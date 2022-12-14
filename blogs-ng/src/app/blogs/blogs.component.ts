import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  blogsCount$: Observable<number>;
  count: number = 0;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.fetchBlogs();
    this.blogsCount$ = this.blogsService.getBlogsCount();
  }

  fetchBlogs() {
    this.blogsService
      .fetchBlogs()
      .subscribe((blogs: Blog[]) => (this.blogs = blogs));
  }

  handleBlogClick() {
    console.log('[handleBlogClick]');
  }

  onDeleteBlog(id: number) {
    this.blogsService.deleteBlog(id);
    this.fetchBlogs();
  }

  pushNewCount() {
    this.count += 1;
    this.blogsService.setBlogsCount(this.count);
  }
}
