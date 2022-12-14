import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Blog } from '../models/blog/blog';

// root -> single instance for the whole angular app
// platform => single instance for more than one angular app running in single browser window
// any => single instance for all eagerly loaded modules + one instance each for all lazy loaded modules
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private readonly baseUrl: string = 'http://localhost:3000/blogs';
  private blogs: Blog[] = [];
  private blogsCount$: Subject<number>;

  constructor(private http: HttpClient) {
    this.blogsCount$ = new Subject();
  }

  public getBlogsCount(): Observable<number> {
    return this.blogsCount$.asObservable();
  }

  public setBlogsCount(count: number): void {
    this.blogsCount$.next(count);
  }

  public fetchBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl);
  }

  public fetchBlogById(id: number): Blog | undefined {
    return this.blogs.find((blog) => blog.id === id);
  }

  public deleteBlog(id: number): void {
    this.blogs = this.blogs.filter((blog) => blog.id !== id);
  }

  public create(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
