import React, { Component } from 'react';
import { GlobalStyles } from 'styles';
import { Wraper } from './App.styled';

import { fetchImagesWithQuery } from 'helpers';
import { Searchbar, ImageGallery, Loader } from 'components';

//Обробка помилки
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    isLoading: false, // done
    error: false, // done
    page: 1,
    totalPages: 1,
    imagesOnBoard: 12,
  };

  async componentDidMount() {
    const { page, imagesOnBoard } = this.state;

    try {
      //! завжди скидуємо помилку (error: false) перед кожним HTTP запитом
      this.setState({ isLoading: true, error: false });

      const initialImages = await fetchImagesWithQuery(
        'sari', // запит
        page, // поточна сторінка
        imagesOnBoard //кількість фото на сторінці
      );

      this.setState({
        images: initialImages.hits,
        totalPages: Math.ceil(initialImages.totalHits / imagesOnBoard),
      });
    } catch (error) {
      this.setState({ error: true });
      toast.error(
        'Упс! Щось пішло не так! Спробуйте перезавантажити сторінку.😉'
      );
    } finally {
      this.setState({ isLoading: false });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    // if (prevState.images.length !== 0) {
    //   const images = await fetchImagesWithQuery('cat', this.state.page);
    //   this.setState(prevState => ({
    //     images: [...prevState.images, ...images.hits],
    //   }));
    // }
  }

  render() {
    const { images, isLoading, error } = this.state;
    console.log(this.state);
    return (
      <Wraper>
        <Searchbar />
        {isLoading && <Loader />}
        {images.length > 0 ? <ImageGallery images={images} /> : null}
        {error && <Toaster position="top-center" reverseOrder={false} />}
        <GlobalStyles />
      </Wraper>
    );
  }
}

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const fetchArticlesWithQuery = async searchQuery => {
//   const response = await axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// export class App extends Component {
//   state = {
//     articles: [],
//     isLoading: false,
//     error: null,
//   };

//   async componentDidMount() {
//     this.setState({ isLoading: true });

//     try {
//       const articles = await fetchArticlesWithQuery('react');
//       console.log(articles);
//       this.setState({ articles });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   render() {
//     const { articles, isLoading, error } = this.state;

//     return (
//       <div>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         {articles.length > 0 && <ArticleList articles={articles} />}
//       </div>
//     );
//   }
// }

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );
