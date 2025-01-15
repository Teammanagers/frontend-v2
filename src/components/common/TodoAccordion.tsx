import styled from 'styled-components';
import chevronIcon from '../../assets/rotating-chevron.svg';
import { useRef, useState } from 'react';

interface TodoAccordionProps {
  children?: React.ReactNode;
  title: string;
  tagList?: string[];
}

export const TodoAccordion = ({
  children,
  title,
  tagList,
}: TodoAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const clickAccordionHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();

    // 열려있는 상태면 닫기
    if (parentRef.current!.clientHeight > 0) {
      parentRef.current!.style.height = '0';
    }
    // 닫혀있는 상태면 열기
    else {
      parentRef.current!.style.height = `${childRef.current!.clientHeight}px`;
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionContainer $isOpen={isOpen}>
      <AccordionHeader onClick={clickAccordionHandler} $isOpen={isOpen}>
        <TitleWrapper>
          <h3>{title}</h3>
          <TagList>
            {tagList?.map((tag, idx) => (
              <Tag $isOpen={isOpen} key={`tag-${idx}`}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </TitleWrapper>

        <IconWrapper $isOpen={isOpen}>
          <img src={chevronIcon} alt="rotating-chevron-icon" />
        </IconWrapper>
      </AccordionHeader>

      <AccordionBodyWrapper ref={parentRef}>
        <AccordionBody ref={childRef} $isOpen={isOpen}>
          {children}
        </AccordionBody>
      </AccordionBodyWrapper>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 382px;
  background-color: #ffffff;
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? '0px 3px 9px rgba(0, 0, 0, 0.08)' : 'none'};
`;

const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  width: inherit;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 15px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  background-color: ${({ $isOpen }) => ($isOpen ? '#F9FBFF' : '#ffffff')};
  cursor: pointer;

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #1d1d1d;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TagList = styled.ul`
  // ul 기본 속성 초기화
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  gap: 8px;
`;

const Tag = styled.li<{ $isOpen: boolean }>`
  // li 기본 속성 초기화
  box-sizing: border-box;
  padding: 5px 8px;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  color: #5c9eff;
  background-color: ${({ $isOpen }) => ($isOpen ? '#ffffff' : '#F9FBFF')};
`;

const IconWrapper = styled.button<{ $isOpen: boolean }>`
  // button 기본 속성 초기화
  background: none;
  border: none;
  padding: 0;
  outline: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }

  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.5s;
  cursor: pointer;
`;

const AccordionBodyWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
`;

const AccordionBody = styled.div<{ $isOpen: boolean }>`
  height: 100px;
  background-color: skyblue;

  //   width: inherit;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
`;
