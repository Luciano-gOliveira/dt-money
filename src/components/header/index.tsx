import logoImg from "../../assets/logo.svg"

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal} >Nova Transação</button>
        
      </Content>
    </Container>
  );
};
