export interface ProductDetailResponse {
    itemId: string;
    title: string;
    price: number;
    imgUrl: string;
    isBestSeller: boolean;
    stars: number;
    boughtInLastMonth: number;
}
