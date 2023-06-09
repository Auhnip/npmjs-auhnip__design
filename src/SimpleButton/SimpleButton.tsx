import * as React from 'react';
import style from './SimpleButton.css';

interface IProps {
  children?: number | string;
  onClick?: () => void;
}

function SimpleButton({ children, onClick }: IProps) {
  return (
    <button onClick={onClick} className={style['simple-button']}>
      {children}
    </button>
  );
}

export default SimpleButton;
