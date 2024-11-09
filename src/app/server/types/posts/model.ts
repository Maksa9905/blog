import { model, models, Schema } from "mongoose";
import { PostSchema } from "./types";


export const postSchema = new Schema<PostSchema>({
    _id: Schema.Types.ObjectId,
    title: String,
    content: String,
    createdAt: String,
    lastUpdatedAt: String,
    tags: [String],
    authorId: String
})

export const PostModel = models.Post || model<PostSchema>('Post', postSchema);