import { RequestUtils } from "@/app/server/handlers"
import { AuthorDTO, AuthorDTOZodSchema, AuthorModel, AuthorResponse, AuthorSchema } from "@/app/server/types/authors";
import { PostModel, PostSchema } from "@/app/server/types/posts";
import { VersionKey } from "@/app/server/types/shared";
import mongoose, { Model } from "mongoose";


export const POST = async (request: Request) => {
    const body = await RequestUtils.getBody<AuthorDTO>(request);

    const { success, error } = AuthorDTOZodSchema.safeParse(body)

    if (success) {
        const newAuthor = await AuthorModel.create({
            _id: new mongoose.Types.ObjectId(),
            name: body.name,
            status: body.status,
            postIds: body.postIds
        })
    
        await newAuthor.save();
    
        return new Response(JSON.stringify(body));
    }

    return new Response(JSON.stringify(error), {status: 400});
}

export const GET = async (request: Request) => {
    const { page, limit, ...queryParams } = RequestUtils.getQuery<AuthorDTO>(request)
    const authors = await AuthorModel.find(queryParams);

    const authorsWithPosts = await Promise.all(authors.map(async (author) => {
        const { postIds, ...rest } = author;

        const posts = await Promise.all(postIds.map(async id => await PostModel.findOne({_id: id}) || {} as PostSchema));

        return({
            ...rest,
            posts: posts,
        })
    }));

    const response: AuthorResponse = RequestUtils.withPagination(authorsWithPosts, page, limit);

    return new Response(JSON.stringify(response));
}