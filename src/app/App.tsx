import { Dropdown } from '@/shared/components/dropdown/Dropdown';
import useToggle from '@/shared/components/dropdown/hooks/useToggle';
import dropdownIcon from '@/shared/assets/icons/dropdown.svg';
import styled from 'styled-components';

function App() {
  const { isOpen, setIsOpen, toggle } = useToggle();

  return (
    <Container>
      <Dropdown setIsOpen={setIsOpen}>
        <Dropdown.Trigger onClick={toggle}>
          <img src={dropdownIcon} />
        </Dropdown.Trigger>

        <Dropdown.Menu isOpen={isOpen}>
          <MenuWrapper>
            <ModifyButton>수정</ModifyButton>
            <DeleteButton>삭제</DeleteButton>
          </MenuWrapper>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 55px;
  height: 50px;
  border-radius: 3px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);

  button {
    width: 19px;
    height: 15px;
    font-size: 10px;
    font-weight: 400;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;

const ModifyButton = styled.button``;

const DeleteButton = styled.button`
  color: #ff0000;
`;
