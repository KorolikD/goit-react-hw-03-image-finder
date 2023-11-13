import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { largeImageURL, tags } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImage
          src={largeImageURL}
          alt={tags}
          onClick={this.openModal}
        />

        <ModalImage
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={this.closeModal}
          isModalOpen={isModalOpen}
        />
      </GalleryItem>
    );
  }
}
