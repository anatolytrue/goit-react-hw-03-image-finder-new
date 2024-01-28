import React from "react"

export function ImageGalleryItem({image}) {
    const { tags, webformatURL } = image

    return (
        <li >
            <img
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
}