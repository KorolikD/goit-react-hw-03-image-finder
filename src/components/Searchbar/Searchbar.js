import React, { Component } from 'react';
import toast from 'react-hot-toast';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
// Створює DOM - елемент наступної структури.

export class Searchbar extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { value: query } = event.target.elements.search;

    if (query === '') {
      toast.error('Порожній рядок, введіть ваш запит.');
      return;
    }

    onSubmit(query);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
