export class Blog {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public isPublished: boolean = true,
    public publishedAt: Date = new Date(),
    public author: string = 'Guest'
  ) {}
}
