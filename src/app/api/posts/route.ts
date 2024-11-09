import { connectToDataBase, RequestUtils } from "@/app/server/handlers";
import { AuthorModel, AuthorSchema } from "@/app/server/types/authors";
import { PostDTO, PostDTOZodSchema, PostModel, PostResponse } from "@/app/server/types/posts";
import mongoose from "mongoose";

connectToDataBase();

export async function GET(request: Request) {
    const { page, limit, ...queryParams } = RequestUtils.getQuery<PostDTO>(request)
    const posts = await PostModel.find(queryParams);

    const postsWithAuthor = await Promise.all(posts.map(async (post) => {
        const { authorId, ...rest } = post;

        const author = await AuthorModel.findOne({_id: authorId}) || {} as AuthorSchema;
        return {
            ...rest,
            author: author
        }
    }))

    const response: PostResponse = RequestUtils.withPagination(postsWithAuthor, page, limit);

    return new Response(JSON.stringify(response));
}

export async function POST(request: Request) {
    const body = await RequestUtils.getBody<PostDTO>(request);

    const { success, error } = PostDTOZodSchema.safeParse(body)

    if (success) {
        const newPost = await PostModel.create({
            _id: new mongoose.Types.ObjectId(),
            title: body.title,
            content: body.content,
            createdAt: body.createdAt,
            lastUpdatedAt: body.lastUpdatedAt,
            tags: body.tags,
            authorId: body.authorId
        })
    
        await newPost.save();
    
        return new Response(JSON.stringify(body));
    }

    return new Response(JSON.stringify(error), {status: 400});
}