import styled from "styled-components";
import Lady from "../assets/Lady.jpg";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <main>
            <BsFillLightningChargeFill
              style={{ color: "blue", fontSize: "10px" }}
            />
            <span>New: Our AI integration just landed</span>
          </main>
          <h1>Everything you need to scale a global team</h1>
          <p>
            Our company helps thousands of companies expand globally with
            unmatched speed and flexibilty
          </p>
          <button>Get Started</button>
        </TextDiv>
        <ImageDiv>
          <img src={Lady} alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1124px) {
    justify-content: center;
  }
`;
const TextDiv = styled.div`
  font-family: "Manrope";
  width: 400px;
  @media (max-width: 1124px) {
    text-align: center;
    margin-bottom: 10px;
  }
  main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: skyblue;
    border-radius: 5px;
    width: 180px;
    span {
      font-size: 9px;
      color: blue;
      font-weight: 500;
      @media (max-width: 1124px) {
        text-align: center;
        width: 100%;
      }
    }
  }
  h1 {
    margin: 6px 0px;
    font-size: 36px;
  }
  P {
    margin-top: 6px;
    font-size: 15px;
  }
  button {
    font-family: Sora;
    width: 100px;
    height: 40px;
    font-size: 12px;
    font-weight: 600;
    background-color: blue;
    border: 1px solid #eee;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }
`;
const ImageDiv = styled.div`
  img {
    height: 400px;
    width: 500px;
    border-radius: 10px;
    @media (max-width: 1124px) {
      width: 100%;
      justify-content: center;
    }
  }
`;
