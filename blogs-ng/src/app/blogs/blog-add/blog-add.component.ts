import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Blog } from '../models/blog/blog';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent {
  blog: Blog = new Blog(0, 'An awesome title', '');
  searchField = new FormControl('Search keyword', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(20),
  ]);
  showKeywordSuggestion: boolean = false;
  keywords: string[] = [];
  /* reactiveBlog = {
    title: new FormControl(),
    body: new FormControl(),
  } */
  reactiveBlog: FormGroup;

  constructor(private blogsService: BlogsService, private fb: FormBuilder) {
    this.reactiveBlog = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ]],
      body: ['', [
        Validators.required,
        Validators.minLength(50),
      ]],
      isPublished: [false, [Validators.required]],
      publishedAt: ['', [Validators.required]],
      author: ['', [Validators.required]],
    });
    console.log(this.reactiveBlog);
    this.searchField.valueChanges.subscribe((val) => {
      console.log(val);
      if (val?.trim()) {
        this.keywords = ['python', 'python django', 'python flask'];
      }
      console.log(this.searchField);
    });
    this.reactiveBlog.valueChanges.subscribe((value) => {
      console.log('[formGroup values]', value);
    });
  }

  handleAddBlogSubmit() {
    console.log(this.blog, this.reactiveBlog.value);
    this.blogsService.create(this.reactiveBlog.value).subscribe((res) => {
      console.log(res);
      this.blogsService.setBlogsCount(1);
    });
  }

  handleClick() {
    this.blog.body = 'A custom body updated from the component side';
  }

  handleSearch() {
    console.log('[searchSubmit]', this.searchField);
  }
}
