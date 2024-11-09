import { Post } from "@/entities/posts";

export interface Author {
    _id: string;
    name: string;
    status: string;
    posts: Post[];
}