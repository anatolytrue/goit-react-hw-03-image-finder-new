import { LoadMoreBtn } from "./Button.styled"
import PropTypes from 'prop-types';

export function Button({ onClick }) {
    return (
        <LoadMoreBtn
            type='button'
            onClick={onClick}
        >
            Load more...
        </LoadMoreBtn>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}