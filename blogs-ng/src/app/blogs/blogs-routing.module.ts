import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  // blogs/:blogId
  { path: ':blogId', component: BlogDetailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
