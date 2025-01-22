import React from 'react';

interface ButtonProps {
  style: string;
  action?: () => void;
  children: React.ReactNode;
}

export default function Button({ style, action, children }: ButtonProps) {
  return (
    <button className={style} onClick={action}>
      {children}
    </button>
  );
}
