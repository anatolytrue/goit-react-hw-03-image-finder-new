import { LoadMoreBtn } from "./Button.styled"

export function Button({ onClick }) {
    return (
        <LoadMoreBtn
            type='button'
            onClick={onClick}
        >
            Load more..
        </LoadMoreBtn>
    )
}