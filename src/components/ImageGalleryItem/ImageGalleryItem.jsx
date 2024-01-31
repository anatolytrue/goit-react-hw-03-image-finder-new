import React from "react"
import { ImageGalleryItemLi, ImageGalleryItemLiImage } from "./ImageGalleryItem.styled"

export function ImageGalleryItem({previewImage, alt, onClickImage}) {

    return (
        <ImageGalleryItemLi >
            <ImageGalleryItemLiImage
                src={previewImage}
                alt={alt}
                onClick={onClickImage}
            />
        </ImageGalleryItemLi>
    )
}