import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <nav>Platform</nav>
          <nav>UseCases</nav>
          <nav>Pricing</nav>
          <nav>Resources</nav>
          <div>
            <ButtonOne>Log In</ButtonOne>
            <ButtonTwo>Request a Demo</ButtonTwo>
          </div>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 40vh;
  width: 150px;
  background-color: #2f99ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Navigation = styled.div`
  text-align: center;
  nav {
    font-weight: 600;
    margin: 10px 0px;
    font-size: 14px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonOne = styled.button`
  font-family: Montserrat;
  font-weight: 500;
  border: 1px solid #eee;
  border-radius: 5px;
  height: 25px;
  width: 60px;
  font-size: 12px;
  color: white;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;
const ButtonTwo = styled.button`
  font-family: Montserrat;
  font-weight: 500;
  border: 1px solid #eee;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  font-size: 10px;
  color: white;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
