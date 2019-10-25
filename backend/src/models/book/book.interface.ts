export interface BookModel  {
    readonly id?: string;
    readonly title: string;
    readonly price: number;
    readonly authors: any[];
    readonly genre: string;
    readonly description: string;
    readonly coverUrl: string;
    readonly type: string;
}
