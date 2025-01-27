import styled from 'styled-components';
import { useAccordionToggle } from '@/widgets/accordion/hooks/useAccordionToggle';
import { AccordionProps } from './types.ts';
import { AccordionHeader } from './Header.tsx';
import { AccordionBody } from './Body.tsx';
import { forwardRef } from 'react';

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, title, tagList }) => {
    const { isOpen, toggleAccrodion, parentRef, childRef } =
      useAccordionToggle();

    return (
      <AccordionContainer>
        <AccordionHeader
          isOpen={isOpen}
          onClick={toggleAccrodion}
          title={title}
          tagList={tagList}
        />
        <AccordionBody parentRef={parentRef} childRef={childRef}>
          {children}
        </AccordionBody>
      </AccordionContainer>
    );
  },
);

Accordion.displayName = 'Accordion';

export { Accordion };

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 382px;
  background-color: #ffffff;
`;
