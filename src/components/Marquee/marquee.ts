import styled from "styled-components";

export const MarqueeContainer = styled.div`
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    width: 100%;
`;

export const MarqueeContent = styled.p`
    color: black;
    font-size: 96px;
    font-weight: bold;
    animation: marqueeAnimation 20s linear infinite; 

    @keyframes marqueeAnimation {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
`;