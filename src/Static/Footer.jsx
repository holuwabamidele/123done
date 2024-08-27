import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <nav>123done</nav>
        <nav>GitHub</nav>
        <nav>Medium</nav>
        <nav>Facebook</nav>
        <nav>tumblr</nav>
        <nav>VISA</nav>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    justify-content: center;
    flex-direction: column;
    margin-top: -30px;
  }
  nav {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 1124px) {
      margin: 5px;
    }
  }
`;
