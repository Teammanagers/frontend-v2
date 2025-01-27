import { ReactNode } from 'react';

type ButtonState = 'menu' | 'alarm' | 'none';

interface TodoProps {
  children: ReactNode;
  buttonState: ButtonState;
}

export type { TodoProps, ButtonState };
