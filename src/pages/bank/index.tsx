import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BankAccount } from "./class/class";
import BankBody from "./sections/Body";
import { Person } from "./class/Encapsulation";
import { Bird, Cat } from "./class/Polymorphism";
import { Dog } from "./class/Inheritance";

const PageContainer = styled.main`
  padding: 0 10px;
`;

interface BankBalanceProps {
  balance: number;
}

function BankBalance({ balance }: BankBalanceProps) {
  return <h2>Bank {balance}</h2>;
}

export default function BankPage() {
  const initialBalance = 100;
  const [balance, setBalance] = useState<number>(initialBalance);
  const account = useRef(new BankAccount(initialBalance)).current;

  useEffect(() => {
    // Person
    const person = new Person("Nizomiddin", 16);
    console.log(person.getDetails());

    // Polimorfizm
    const bird = new Bird();
    const cat = new Cat();
    bird.speak();
    cat.speak();

    const dog = new Dog("Rex");
    dog.speak();
  }, []);

  function handleDeposit() {
    account.deposit(10);
    setBalance(account.getBalance());
  }

  function handleWithdraw() {
    if (account.getBalance() >= 10) {
      account.withdraw(10);
      setBalance(account.getBalance());
    }
  }

  return (
    <PageContainer>
      <BankBalance balance={balance} />
      <BankBody />
    </PageContainer>
  );
}
