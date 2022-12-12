import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../models/blog/blog';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  blogId: number;
  blogItem: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.blogId = +params['blogId'];
      this.fetchBlogDetail(this.blogId);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchBlogDetail(blogId: number) {
    this.blogItem = this.blogsService.fetchBlogById(blogId);
  }
}
