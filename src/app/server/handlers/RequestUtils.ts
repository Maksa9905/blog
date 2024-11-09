import { PaginationParams } from "@/app/server/types/shared";


export class RequestUtils {
    static getQuery<TRequest>(request: Request) {
        const url = new URL(request.url);
        return Object.fromEntries(url.searchParams) as TRequest;
    }

    static async getBody<TRequest>(request: Request) {
        return await request.json() as TRequest;
    }

    static getParam(request: Request) {
        return request.url.split('/').pop();
    }

    static withPagination<Entity>(entities: Entity[], page: string, limit: string) {
        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);

        if (!pageInt || !limitInt) return { data: entities };

        return {
            data: entities.slice((pageInt - 1) * limitInt, pageInt * limitInt),
            pagination: {
                page: pageInt,
                limit: limitInt,
                total: entities.length
            },
        }
    }
}