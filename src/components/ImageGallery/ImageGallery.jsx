import { ImageGalleryItem } from "components/ImageGalleryItem";

export function ImageGallery({ images }) {
        return (
            <ul>
                {images.map((image) => (
                    <ImageGalleryItem 
                        key={image.id}
                        image={image} />
                ))}
            </ul>
    )
}