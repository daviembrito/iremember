import type React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button(props: Props) {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={`px-6 py-2 bg-outer-300 rounded-lg hover:bg-outer-400 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
