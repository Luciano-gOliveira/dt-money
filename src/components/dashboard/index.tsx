import { Summary } from "../summary";
import { TransactionsTable } from "../transactionsTable";

import { Container } from "./styles";

export const Dashboard = () => {
    return(
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
} 