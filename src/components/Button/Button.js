// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і
// рендеритися разом із попередніми.
// Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення.
// Якщо масив зображень порожній, кнопка не рендериться.

import { LoadMoreButton, Wraper } from './Button.styled';

export const Button = ({ onClick }) => (
  <Wraper>
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  </Wraper>
);
