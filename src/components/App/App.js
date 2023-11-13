import React, { Component } from 'react';
import { GlobalStyles } from 'styles';
import { Wraper } from './App.styled';

import { fetchImagesWithQuery } from 'helpers/api';
import { trimString } from 'helpers/trimString';
import { Searchbar, ImageGallery, Loader, Button } from 'components';

//Обробка помилки
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],

    page: 1,
    totalPages: 1,
    imagesOnBoard: 12,

    isLoading: false, // !done
    error: false, // !done
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    this.setState({
      query: `${
        event.target.elements.search.value !== ''
          ? `${Date.now()}/${event.target.elements.search.value}`
          : ''
      }`,
      images: [],
      page: 1,
      error: false,
    });

    // if (this.state.images.length === 0) {
    //   this.setState({ error: true });
    //   toast.error(
    //     'За вашим запитом нічого не знайдено. Спробуйте інший запит.'
    //   );
    // }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // async componentDidMount() {
  //   const { page, imagesOnBoard } = this.state;

  //   try {
  //     //! завжди скидуємо помилку (error: false) перед кожним HTTP запитом
  //     this.setState({ isLoading: true, error: false });

  //     const initialImages = await fetchImagesWithQuery(
  //       'sari', // запит
  //       page, // поточна сторінка
  //       imagesOnBoard //кількість фото на сторінці
  //     );
  //     this.setState({
  //       images: initialImages.hits,
  //       totalPages: Math.ceil(initialImages.totalHits / imagesOnBoard),
  //     });
  //   } catch (error) {
  //     this.setState({ error: true });
  //     toast.error(
  //       'Упс! Щось пішло не так! Спробуйте перезавантажити сторінку.😉'
  //     );
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, imagesOnBoard } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        //     //! завжди скидуємо помилку (error: false) перед кожним HTTP запитом
        this.setState({ isLoading: true, error: false });

        const initialImages = await fetchImagesWithQuery(
          trimString(query), //запит
          page, // сторінка
          imagesOnBoard // к-сть постів на сторінці
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...initialImages.hits],
          totalPages: Math.ceil(initialImages.totalHits / imagesOnBoard),
        }));

        // if (this.state.images.length === 0) {
        //   this.setState({ error: true });
        //   toast.error(
        //     'За вашим запитом нічого не знайдено. Спробуйте інший запит.'
        //   );
        // }
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
    const { images, isLoading, error, totalPages } = this.state;

    console.log(this.state);

    return (
      <Wraper>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {isLoading && <Loader />}
        {error && <Toaster position="top-center" reverseOrder={false} />}

        {images.length > 0 ? (
          <>
            <ImageGallery images={images} />
            {totalPages > 1 && <Button onClick={this.handleLoadMore} />}
          </>
        ) : null}

        <GlobalStyles />
      </Wraper>
    );
  }
}
