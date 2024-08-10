import logoImg from "../../assets/logo.svg"

import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button>Nova Transação</button>
      </Content>
    </Container>
  );
};
