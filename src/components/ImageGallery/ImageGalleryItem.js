import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { largeImageURL, tags } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImage
          src={largeImageURL}
          alt={tags}
          onClick={this.toggleModal}
        />

        <ModalImage
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={this.toggleModal}
          isModalOpen={isModalOpen}
        />
      </GalleryItem>
    );
  }
}
