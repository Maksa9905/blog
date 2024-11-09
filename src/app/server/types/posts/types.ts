import { z } from "zod";
import { PaginationParams, Response, VersionKey } from "../shared";
import { AuthorDTO, AuthorSchema } from "../authors";

export type PostSchema = VersionKey<{
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    lastUpdatedAt: string | null;
    tags: string[];
    authorId: string;
}>

export type PostDTO = Partial<Omit<PostSchema, '_id'>> & PaginationParams;

export const PostDTOZodSchema = z.object({
    title: z.string().min(1).max(100),
    content: z.string().min(1).max(1000),
    createdAt: z.string(),
    lastUpdatedAt: z.string().nullable(),
    tags: z.array(z.string()),
    authorId: z.string(),
    page: z.string(),
    limit: z.string(),
}).superRefine(({page}, ctx) => {
    if (isNaN(Number(page))) return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'page must be a number'
    })
}).superRefine(({limit}, ctx) => {
    if (isNaN(Number(limit))) return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'limit must be a number'
    })
})

export type PostResponse = Response<{
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    lastUpdatedAt: string | null;
    tags: string[];
    author: AuthorSchema,
}>;