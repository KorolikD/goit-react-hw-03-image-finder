import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageURL, tags }) => (
  <GalleryItem>
    <GalleryItemImage src={largeImageURL} alt={tags} />
  </GalleryItem>
);
