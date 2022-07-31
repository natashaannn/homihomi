export type ApiResponse = {
    data?: Post[];
    paging?: Paging;
    error?: ErrorResponse;
}

// https://developers.facebook.com/docs/graph-api/guides/error-handling/
export type ErrorResponse = {
    code: number;
    error_subcode?: number;
    error_user_title?: string;
    error_user_msg?: string;
    fbtrace_id: string;
    message: string;
    type: string;
}

export type Page = {
    title: string;
    link: string
}
  
export type Paging = {
    cursors?: {
        after?: string;
        before?: string;
    };
    limit?: number;
    previous: string;
    next: string;
}

export type Post = {
    updated_time: string;
    message?: string;
    story?: string;
    id: string;
}