import Account from "@/components/account/Account";
import Deposit from "@/components/deposit/Deposit";
import { User } from "@/interfaces/User";
import styled from "styled-components";

const BodyWrapper = styled.section`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TestUser: User = {
  name: "Nizomiddin",
  age: 22,
  balance: 100,
  cart: [],
  last_name: "Valijanov",
};
export default function BankBody() {
  return (
    <BodyWrapper>
      <Account user={TestUser} />
      <Deposit />
    </BodyWrapper>
  );
}
