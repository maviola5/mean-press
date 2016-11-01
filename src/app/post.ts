export class Post {
    id: number;
    date: string;
    title: string;
    content: string;
    excerpt: string;
    author: number;
    authorName: string;
    categories: number[];
    tags: number[];

    constructor(obj?: any){
        this.id          = obj && obj.id          || null;
        this.date        = obj && obj.date        || null;
        this.title       = obj && obj.title       || null;
        this.content     = obj && obj.content     || null;
        this.excerpt     = obj && obj.excerpt     || null;
        this.author      = obj && obj.author      || null;
        this.authorName  = obj && obj.authorName  || null;
        this.categories  = obj && obj.categories  || null;
        this.tags        = obj && obj.tags        || null;
    }
}