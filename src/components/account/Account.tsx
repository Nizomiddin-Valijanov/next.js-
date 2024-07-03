import React from "react";
import styled from "styled-components";
import Image from "@/utils/Images/Image";
import { User } from "@/interfaces/User";

const UserFigure = styled.figure`
  width: 200px;
  height: 200px;
`;

interface AccountProps {
  user: User | null; // Assuming User interface has been defined correctly
}

const Account: React.FC<AccountProps> = ({ user }) => {
  if (!user) return <div>User not found</div>;

  return (
    <article>
      <UserFigure>
        <Image objectFit="cover" src="" alt="user" />
      </UserFigure>
    </article>
  );
};

export default Account;
