import { connectToDataBase, RequestUtils } from "@/app/server/handlers";
import { PostDTO, PostDTOZodSchema, PostModel } from "@/app/server/types/posts";
import mongoose from "mongoose";

connectToDataBase();

export async function GET(request: Request) {
    const queryParams = RequestUtils.getQuery<PostDTO>(request)
    const posts = await PostModel.find(queryParams);
    return new Response(JSON.stringify(posts));
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