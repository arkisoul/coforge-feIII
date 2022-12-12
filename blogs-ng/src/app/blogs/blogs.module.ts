import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    BlogsComponent,
    SingleBlogComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  providers: [],
  exports: [BlogsComponent]
})
export class BlogsModule { }
