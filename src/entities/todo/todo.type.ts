import { ReactNode } from 'react';

type ButtonState = 'menu' | 'alarm' | 'none';

interface ITodo {
  children: ReactNode;
  buttonState: ButtonState;
}

export type { ITodo, ButtonState };
