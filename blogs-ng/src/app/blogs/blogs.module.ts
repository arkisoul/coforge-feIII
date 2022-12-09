import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

@NgModule({
  declarations: [
    BlogsComponent,
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  exports: [BlogsComponent]
})
export class BlogsModule { }
