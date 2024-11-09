

export class RequestUtils {
    static getQuery<TRequest>(request: Request) {
        const url = new URL(request.url);
        return Object.fromEntries(url.searchParams) as TRequest;
    }

    static async getBody<TRequest>(request: Request) {
        return await request.json() as TRequest;
    }
}