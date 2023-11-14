import React, { Component } from 'react';
import { AppWraper } from './App.styled';

import { fetchImagesWithQuery } from 'helpers/api';
import { Searchbar, ImageGallery, Loader, Button } from 'components';

//Обробка помилки
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    randomQueryId: 0,
    images: [],

    page: 1,
    totalPages: 1,
    imagesOnBoard: 15,

    isLoading: false,
    error: false,
  };

  handleSearchSubmit = query => {
    this.setState({
      query,
      randomQueryId: Date.now(),
      images: [],
      page: 1,
      error: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, randomQueryId, page, imagesOnBoard } = this.state;

    if (
      prevState.query !== query ||
      prevState.page !== page ||
      prevState.randomQueryId !== randomQueryId
    ) {
      try {
        //     //! завжди скидуємо помилку (error: false) перед кожним HTTP запитом
        this.setState({ isLoading: true, error: false });

        const initialImages = await fetchImagesWithQuery(
          query, //запит
          page, // сторінка
          imagesOnBoard // к-сть постів на сторінці
        );

        if (initialImages.total === 0) {
          this.setState({ error: true });
          toast.error('За вашим запитом нічого не знайдено.');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...initialImages.hits],
            totalPages: Math.ceil(initialImages.totalHits / imagesOnBoard),
          }));
        }
      } catch (error) {
        this.setState({ error: true });
        toast.error(
          'Упс! Щось пішло не так! Спробуйте перезавантажити сторінку.😉'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, totalPages, page } = this.state;

    return (
      <AppWraper className="gallery">
        <Searchbar onSubmit={this.handleSearchSubmit} />

        <Toaster position="top-right" reverseOrder={false} />
        {isLoading && <Loader />}

        {images.length > 0 ? (
          <>
            <ImageGallery images={images} />
            {totalPages !== page && <Button onClick={this.handleLoadMore} />}
          </>
        ) : null}
      </AppWraper>
    );
  }
}
