import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BlogsService } from './blogs/services/blogs.service';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello world</h1>`,
  // styles: ['h1 { background-color: black; color: white}', '']
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  observable: Observable<number>;
  subject: Subject<number>;
  behaviorSubject: BehaviorSubject<number>;
  blogsCount$: Observable<number>;
  count: number;

  constructor(private blogsService: BlogsService) {
    this.observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      setTimeout(() => {
        observer.next(5);
        observer.complete();
      }, 1000)
      observer.next(6);
    });
    this.subject = new Subject();
    this.subject.next(1);
    this.subject.subscribe((value) => console.log('sub', value));
    this.behaviorSubject = new BehaviorSubject(0);
    this.behaviorSubject.subscribe((value) => console.log('behaviorSubject', value));
    this.behaviorSubject.next(1);
    const sub = this.observable.subscribe(value => console.log(value));
    this.observable.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
    this.blogsCount$ = this.blogsService.getBlogsCount();
    this.blogsService.getBlogsCount().subscribe(val => this.count = val);
  }
}
