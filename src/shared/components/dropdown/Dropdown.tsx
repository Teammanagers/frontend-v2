import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '@/shared/components/dropdown/hooks/useClickOutstide';
import DropdownTrigger from './Trigger';
import DropdownMenu from './Menu';

interface DropdownProps {
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ children, setIsOpen }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, setIsOpen);

  return <DropdownContainer ref={dropdownRef}>{children}</DropdownContainer>;
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;

export { Dropdown };

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;
