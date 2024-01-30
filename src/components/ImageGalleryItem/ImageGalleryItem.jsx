import React from "react"
import { ImageGalleryItemLi, ImageGalleryItemLiImage } from "./ImageGalleryItem.styled"

export function ImageGalleryItem({image}) {
    const { tags, webformatURL } = image

    return (
        <ImageGalleryItemLi >
            <ImageGalleryItemLiImage
                src={webformatURL}
                alt={tags}
            />
        </ImageGalleryItemLi>
    )
}