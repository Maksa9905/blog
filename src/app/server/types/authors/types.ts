import { z } from "zod";
import { PaginationParams, Response, VersionKey } from "../shared";
import { PostSchema } from "../posts";

export type AuthorSchema = VersionKey<{
    _id: string;
    name: string;
    status: string;
    postIds: string[];
}>

export type AuthorDTO = Partial<Omit<AuthorSchema, '_id'>> & PaginationParams;

export const AuthorDTOZodSchema = z.object({
    name: z.string().min(1).max(100),
    status: z.string().min(1).max(100),
    postIds: z.array(z.string()),
    page: z.number(),
    limit: z.number(),
})

export type AuthorResponse = Response<{
    _id: string;
    name: string;
    status: string;
    posts: PostSchema[]
}> 