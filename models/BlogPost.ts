import { ChiselEntity } from "@chiselstrike/api";
export class BlogPost extends ChiselEntity {
    author: string;
    content: string;
    publishedAt: number;
    hidden: boolean;
}
