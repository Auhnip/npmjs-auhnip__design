import React from 'react';

import style from './TextBox.css';

function TextBox({ children }: { children: React.ReactNode }) {
  return <div className={style['text-box']}>{children}</div>;
}

export default TextBox;
