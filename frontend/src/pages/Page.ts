export abstract class Page {
    abstract render(): Promise<string>;
    afterRender(): void {} 
}