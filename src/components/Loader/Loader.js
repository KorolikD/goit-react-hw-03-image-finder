// https://mhnpd.github.io/react-loader-spinner/docs/intro

// Компонент спінера відображається, доки відбувається завантаження зображень.
// Використовуйте будь - який готовий компонент, наприклад react - loader - spinner або будь - який інший.

import { RotatingLines } from 'react-loader-spinner';
import { theme } from 'styles';

export const Loader = () => (
  <div
    style={{
      height: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RotatingLines
      strokeColor={theme.colors.gray}
      strokeWidth="5"
      animationDuration="0.75"
      width="60"
      visible={true}
    />
  </div>
);
