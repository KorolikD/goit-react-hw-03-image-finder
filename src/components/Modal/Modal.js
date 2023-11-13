import React from 'react';
import { ModalWindow, Overlay } from './Modal.styled';
import ReactModal from 'react-modal';

// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм
// і відображатися велика версія зображення.Модальне вікно повинно закриватися по натисканню
// клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого модального
//  вікна рендериться зображення(у прикладі натисніть Run).Анімацію робити не потрібно!

export const Modal = () => (
  <Overlay>
    <ModalWindow>
      <img src="" alt="" />
    </ModalWindow>
  </Overlay>
);
