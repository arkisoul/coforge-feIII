import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Blog } from '../models/blog/blog';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent {
  blog: Blog = new Blog(0, 'An awesome title', '');
  searchField = new FormControl('Search keyword', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]);
  showKeywordSuggestion: boolean = false;
  keywords: string[] = [];

  constructor() {
    console.log(this.searchField);
    this.searchField.valueChanges.subscribe(val => {
      console.log(val);
      if(val?.trim()) {
        this.keywords = ['python', 'python django', 'python flask']
      }
      console.log(this.searchField);
    })
  }

  handleAddBlogSubmit() {
    console.log(this.blog);
  }

  handleClick() {
    this.blog.body = 'A custom body updated from the component side';
  }

  handleSearch() {
    console.log('[searchSubmit]', this.searchField);
  }
}
