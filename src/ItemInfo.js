import img1 from "./images/image-product-1.jpg";
import img2 from "./images/image-product-2.jpg";
import img3 from "./images/image-product-3.jpg";
import img4 from "./images/image-product-4.jpg";
import thumb1 from "./images/image-product-1-thumbnail.jpg";
import thumb2 from "./images/image-product-2-thumbnail.jpg";
import thumb3 from "./images/image-product-3-thumbnail.jpg";
import thumb4 from "./images/image-product-4-thumbnail.jpg";

export const product = {
    company: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything the
    weather can offer.`,
    initPrice: 250,
    discount: 50,
    currentPrice: 125,
    images: [img1, img2, img3, img4],
    thumbnails: [thumb1, thumb2, thumb3, thumb4],
    cartPic: img1,
}