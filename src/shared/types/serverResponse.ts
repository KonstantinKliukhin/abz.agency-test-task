export type ServerFails = Partial<Record<string, string[]>>

export interface CommonServerResponse
<Fails extends ServerFails | undefined = undefined> {
    message?: string;
    success: boolean;
    fails?: Fails;
}

export interface CommonServerPaginationResponse extends CommonServerResponse {
    count: number;
    page: number;
    total_pages: number;
    links: {
        next_url: string | null;
        prev_url: string | null;
    };
}
