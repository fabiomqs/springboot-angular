export interface IBlog {
  id?: number;
  title?: string;
  author?: string;
  post?: string;
}

export class Blog implements IBlog {
  constructor(public id?: number, public title?: string, public author?: string, public post?: string) {}
}

export function getBlogIdentifier(blog: IBlog): number | undefined {
  return blog.id;
}
