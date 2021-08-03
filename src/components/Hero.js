import React from "react";
import styled from "styled-components";
import BgImg from "../assets/bannerStock.png";

const Section = styled.section`
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;
/*background-image: url(${BgImg}); ;*/

const Content = styled.div`
  width: 100%;
  height: 100px;
`;
const Left = styled.div`
  padding-left: 220px;
  padding-right: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;
const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177/ 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Entre e Confira o nosso Stock <br />
            custo 10$!
          </Title>
          <Desc>
            Lorem ipsum sjhsdfsd sdhds dsjhsd dshdjs dsjhj{" "}
            <span>Goofgavghsd sdjh</span>
            {" "}e muito mais!
          </Desc>
          <Button href="https://iyonissio.netlify.app/" target="_blank">
            <span>Veja o seu stock free</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
