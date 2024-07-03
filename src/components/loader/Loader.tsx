import styled from "styled-components";

export default function Loading() {
  const StyledLoader = styled.section`
    background-color: #071952;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
}
