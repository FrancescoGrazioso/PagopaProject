import { listItemInterface } from "./listItemInterface";

export interface SearchListInterface {
    error: string,
    stargazers: listItemInterface[],
    loading: boolean,
    handleSubmit: Function
}