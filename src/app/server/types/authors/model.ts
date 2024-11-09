import { Model, model, Models, models, Schema } from "mongoose";
import { AuthorSchema } from "./types";


export const authorSchema = new Schema<AuthorSchema>({
    _id: String,
    name: String,
    status: String,
    postIds: [String],
})

export const AuthorModel = models.Author as Model<AuthorSchema> || model<AuthorSchema>('Author', authorSchema)