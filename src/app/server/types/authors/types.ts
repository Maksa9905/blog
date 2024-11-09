import { z } from "zod";

export interface AuthorSchema {
    _id: string;
    name: string;
    status: string;
    postIds: string[];
}

export type AuthorDTO = Partial<Omit<AuthorSchema, 'id'>>

export const AuthorDTOZodSchema = z.object({
    name: z.string().min(1).max(100),
    status: z.string().min(1).max(100),
    postIds: z.array(z.string()),
})