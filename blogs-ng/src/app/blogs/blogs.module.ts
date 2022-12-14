import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';

@NgModule({
  declarations: [
    BlogsComponent,
    SingleBlogComponent,
    BlogDetailComponent,
    BlogAddComponent,
  ],
  imports: [CommonModule, BlogsRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [BlogsComponent],
})
export class BlogsModule {}
