export interface Translation<T> {
    title: string;
    values: Record<keyof T, string>;
}
