import { z } from "zod";

export interface PostSchema {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    lastUpdatedAt: string | null;
    tags: string[];
    authorId: string;
}

export type PostDTO = Partial<Omit<PostSchema, '_id'>>

export const PostDTOZodSchema = z.object({
    title: z.string().min(1).max(100),
    content: z.string().min(1).max(1000),
    createdAt: z.string(),
    lastUpdatedAt: z.string().nullable(),
    tags: z.array(z.string()),
    authorId: z.string(),
})