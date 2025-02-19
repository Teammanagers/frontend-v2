import Modal from '@/shared/components/modal/Modal';
import useToggle from '@/shared/hooks/useToggle';
import styled from 'styled-components';

export function ModalTestPage() {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Modal Open</button>

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalWrapper>
          <p>hi</p>
        </ModalWrapper>
      </Modal>
    </div>
  );
}

const ModalWrapper = styled.div`
  width: 552px;
  height: 168px;
`;
