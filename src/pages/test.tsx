import { NavRoutingLink } from '../components/common/NavRoutingLink';
import testIcon from '../assets/test.svg';
import styled from 'styled-components';

export const Test = () => {
  return (
    <Container>
      <h2>NavRoutingLink</h2>
      <NavRoutingLink url="/todo" size="small">
        나의 투두리스트
      </NavRoutingLink>

      <NavRoutingLink url="/calendar" size="medium">
        다가오는 일정
      </NavRoutingLink>

      <NavRoutingLink
        url="/profile"
        size="large"
        icon={<img src={testIcon} alt="arrow-icon" />}
      >
        프로필 수정
      </NavRoutingLink>

      <br />

      <h2>Toggle</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fbff;
`;
