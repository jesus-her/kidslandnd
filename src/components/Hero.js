import React from "react";
import styled from "styled-components";
import { other_images } from "../utils/images";

const Hero = () => {
  return (
    <HeroWrapper className="bg-black">
      <div className="container h-100 flex">
        <div className="hero-content">
          <h2>Virtual World of Learning</h2>
          <p>
            Are you ready to embark on this exciting learning journey? Don’t
            wait any longer, dive into the adventure and discover how much you
            can learn in such a short time.
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.55);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(13.5px);
      -webkit-backdrop-filter: blur(13.5px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      h1 {
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Hero;
