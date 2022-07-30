export type Page = {
    title: string;
    link: string
}

export type ApiResponse = undefined | {
    data: Listing[];
    paging: Paging;
}
  
export type Paging = {
previous: string;
next: string
}

export type Listing = {
updated_time: string;
message?: string;
story?: string;
id: string;
}