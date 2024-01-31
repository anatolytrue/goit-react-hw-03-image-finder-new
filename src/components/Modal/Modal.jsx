import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, ModalBtn } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        const { modalImage, closeModal } = this.props;
        return createPortal(
            <Overlay
                onClick={this.handleBackdropClick}
            >
                <ModalWindow>
                    <img src={modalImage} alt="big" />
                    <ModalBtn
                        type='button'
                        onClick={() => closeModal()}
                    >
                        ✖
                    </ModalBtn>
                </ModalWindow>
            </Overlay>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    modalImage: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
}