import { RequestUtils } from "@/app/server/handlers";
import { PostDTO, PostDTOZodSchema, PostModel } from "@/app/server/types/posts";
import { NextApiRequest } from "next";
import { usePathname } from "next/navigation";

export async function GET(request: Request) {
    const id = RequestUtils.getParam(request);

    const post = await PostModel.findOne({_id: id});

    return new Response(JSON.stringify(post));
}

export async function DELETE(request: Request) {
    const id = RequestUtils.getParam(request);

    await PostModel.deleteOne({_id: id});

    return new Response(null, {status: 204});
}

export async function PUT(request: Request) {
    const id = RequestUtils.getParam(request);

    const body = await RequestUtils.getBody<PostDTO>(request);

    const { success, error } = PostDTOZodSchema.safeParse(body)

    if (success) {
        const post = await PostModel.findOneAndUpdate({_id: id}, body, {new: true});
        return new Response(JSON.stringify(post));
    }

    return new Response(JSON.stringify(error), {status: 400});
}