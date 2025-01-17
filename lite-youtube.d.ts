export declare class LiteYTEmbed extends HTMLElement {
    shadowRoot: ShadowRoot;
    private domRefFrame;
    private domRefImg;
    private domRefPlayButton;
    private static isPreconnected;
    private isIframeLoaded;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    get videoId(): string;
    set videoId(id: string);
    get poster(): string;
    set poster(poster: string);
    get customCss(): string;
    set customCss(css: string);
    get playlistId(): string;
    set playlistId(id: string);
    get videoTitle(): string;
    set videoTitle(title: string);
    get videoPlay(): string;
    set videoPlay(name: string);
    get videoStartAt(): string;
    get autoLoad(): boolean;
    get noCookie(): boolean;
    get posterQuality(): string;
    get posterLoading(): HTMLImageElement['loading'];
    get params(): string;
    set params(opts: string);
    private setupDom;
    private setupComponent;
    attributeChangedCallback(name: string, oldVal: unknown, newVal: unknown): void;
    private addIframe;
    private initImagePlaceholder;
    private initIntersectionObserver;
    private attemptShortAutoPlay;
    private isYouTubeShort;
    private static addPrefetch;
    private static warmConnections;
}
declare global {
    interface HTMLElementTagNameMap {
        'lite-youtube': LiteYTEmbed;
    }
    interface Window {
        liteYouTubeNonce: string;
        liteYouTubeIsPreconnected: boolean;
    }
}
