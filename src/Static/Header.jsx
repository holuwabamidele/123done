import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>123done</Logo>
        <Navigation>
          <nav>Platform</nav>
          <nav>UseCases</nav>
          <nav>Pricing</nav>
          <nav>Resources</nav>
        </Navigation>
        <div>
          <ButtonOne>Log In</ButtonOne>
          <ButtonTwo>Request a Demo</ButtonTwo>
        </div>
        <SideNav onClick={handleToggle}>
          <BsThreeDotsVertical />
        </SideNav>
      </Wrapper>
      <div>{toggle ? <SideBar /> : null}</div>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin: 20px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-family: Sora;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  nav {
    margin: 0px 15px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;
const ButtonOne = styled.button`
  font-family: Sora;
  margin-right: 10px;
  width: 60px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ButtonTwo = styled.button`
  font-family: Sora;
  margin-left: 10px;
  width: 120px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  background-color: blue;
  border: 1px solid #eee;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SideNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 20px;
    cursor: pointer;
  }
`;
