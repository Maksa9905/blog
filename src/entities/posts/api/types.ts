import { Author } from "@/entities/author";

export interface Post {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    lastUpdatedAt: string | null;
    tags: string[];
    author: Author;
}