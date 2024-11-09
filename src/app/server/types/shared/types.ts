export interface PaginationParams {
    page: string,
    limit: string
} 

export type VersionKey<TEntity> = TEntity &{ __v: number }

export interface Response<TEntity = any> {
    data: VersionKey<TEntity> | VersionKey<TEntity>[],
    pagination?: {
        page: number,
        limit: number,
        total: number        
    }
}