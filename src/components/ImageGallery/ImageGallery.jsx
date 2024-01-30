import { ImageGalleryItem } from "components/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

export function ImageGallery({ images }) {
        return (
            <ImageGalleryList>
                {images.map((image) => (
                    <ImageGalleryItem 
                        key={image.id}
                        image={image} />
                ))}
            </ImageGalleryList>
    )
}