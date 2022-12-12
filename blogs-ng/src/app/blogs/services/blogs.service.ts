import { Injectable } from '@angular/core';
import { Blog } from '../models/blog/blog';

// root -> single instance for the whole angular app
// platform => single instance for more than one angular app running in single browser window
// any => single instance for all eagerly loaded modules + one instance each for all lazy loaded modules
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogs: Blog[] = [];

  constructor() {
    for (let index = 1; index <= 5; index++) {
      this.blogs.push(
        new Blog(index, `Blog ${index}`, `Blog body ${index}`, index % 2 === 1)
      );
    }
  }

  public fetchBlogs() {
    return this.blogs;
  }

  public fetchBlogById(id: number) {
    return this.blogs.find((blog) => blog.id === id);
  }
}
