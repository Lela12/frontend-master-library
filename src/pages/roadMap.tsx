import React from "react";
import styled from "styled-components";
import { ReactComponent as RoadMapBaseSvg } from "../assets/roadmap-base.svg";
import RoadMapImg from "../components/RoadMapImg";
import htmlcss from "../assets/htmlcss.svg";
import javascript from "../assets/javascript.svg";
import git from "../assets/git.svg";
import cooperation from "../assets/cooperation.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import computerscience from "../assets/computerscience.svg";
import mainLogo from "../assets/main-logo.png";
import downArrow from "../assets/down-arrow.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const RoadMapWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const RoadMapBase = styled(RoadMapBaseSvg)``;

const RoadMapImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 100px;
`;

const IntroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IntroImage = styled.img`
  padding: 80px 0 100px 0;
`;

const DownArrow = styled.span`
  background: url(${downArrow}) no-repeat center center / 100% 100%;
  width: 30px;
  height: 30px;
  margin-top: 120px;
  cursor: pointer;
  z-index: 98;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

function RoadMap() {
  const handleDownArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IntroContainer>
        <IntroImage src={mainLogo} alt="소프트웨어 장인 로드맵" />
        <DownArrow onClick={handleDownArrowClick} />
      </IntroContainer>
      <RoadMapWrapper>
        <RoadMapBase />
      </RoadMapWrapper>
      <RoadMapImgContainer>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="-200px"
            top="calc(100vh + 90px)"
            names={htmlcss}
            category="htmlcss"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg left="-80px" top="25px" names={git} category="git" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="150px"
            top="15px"
            names={computerscience}
            category="computerscience"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg
            left="40px"
            top="35px"
            names={javascript}
            category="javascript"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg left="-150px" top="35px" names={react} category="react" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <RoadMapImg
            left="-10px"
            top="30px"
            names={typescript}
            category="typescript"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <RoadMapImg
            left="240px"
            top="0px"
            names={cooperation}
            category="cooperation"
          />
        </AnimationOnScroll>
      </RoadMapImgContainer>
      <div style={{ height: "150px" }} />
    </>
  );
}

export default RoadMap;
