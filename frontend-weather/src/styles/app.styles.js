import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const LondonWeather = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1000px;
  margin: 2.5rem;

  .main-title {
    color: #d06d6d;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    grid-column: 1 / -1;
  }

  .section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
  }
  .reading {
    font-size: 1.5rem;
    margin: 0;
    color: #989898;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem 1fr));
`;

export const InfoStyle = styled.div`
  grid-column: 1 / 3;
`;

export const PreviousWrapper = styled.div`
  background: #fff;
  color: #444;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: ${({ previous }) =>
    previous ? "translateY(0)" : "translateY(60%)"};
  transition: -webkit-transform 350ms ease;
  transition: transform 350ms ease;
  transition: transform 350ms ease, -webkit-transform 350ms ease;
  padding: 3rem;
  .previous-weather__title {
    text-align: ${({ previous }) => (previous ? "left" : "center")};
    ${({ previous }) =>
      previous ? "animation: slideUpIn 750ms forwards;" : "text-align: center"};
  }
  @-webkit-keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Toggle = styled.button`
  position: absolute;
  background: #fff;
  left: 50%;
  top: 50px;
  width: 10rem;
  transform: translate(-50%, calc(-100% - 3rem));
  text-align: center;
  font-size: 1rem;
  line-height: 1;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  cursor: pointer;
  color: #989898;
  border: 0;
  font-family: inherit;
  :hover,
  :focus {
    color: #444;
  }
  span {
    display: block;
    transform: ${({ previous }) =>
      previous ? "rotate(180deg) translateY(-6px)" : "rotate(0)"};
    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;
  }
`;

export const PreviousDays = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: space-between;
  height: 150px;
  overflow: auto;
`;

export const PreviousDay = styled.div`
  opacity: 0;
  ${({ previous }) => previous && "animation: slideUpIn 750ms forwards;"};
  margin: 10px 0;

  > * {
    margin: 0;
  }
  .previous-day__date {
    font-size: 0.9rem;
    color: #989898;
  }
  .previous-day__more-info {
    cursor: pointer;
    border: 0;
    border-radius: 100vmax;
    background: #444;
    color: #fff;
    text-transform: uppercase;
    padding: 0.3em 1em;
    margin-top: 1em;
  }
  .previous-day__more-info:hover {
    background: #989898;
  }
  :nth-child(1) {
    animation-delay: 100ms;
  }
  :nth-child(2) {
    animation-delay: 125ms;
  }
  :nth-child(3) {
    animation-delay: 150ms;
  }
  :nth-child(4) {
    animation-delay: 175ms;
  }
  :nth-child(5) {
    animation-delay: 200ms;
  }
  :nth-child(6) {
    animation-delay: 225ms;
  }
  :nth-child(7) {
    animation-delay: 250ms;
  }
  .show-weather.previous-weather .previous-day:nth-child(7) {
    animation-delay: 300ms;
  }
`;

export const UnitsStyles = styled.div`
  place-self: end;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 0.7;
  transition: opacity 275ms linear;
  :hover {
    opacity: 1;
  }
`;

export const ToggleTemp = styled.button`
  cursor: pointer;
  width: 4em;
  border: 2px solid #fff;
  background: transparent;
  padding: 0;
  border-radius: 100vmax;
  margin: 0 1em;
  ::after {
    content: "";
    display: block;
    background: #fff;
    border-radius: 50%;
    height: 1rem;
    margin: 3px;
    margin-left: ${(props) => (props.units ? "3px" : "auto")};
    width: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;
  padding: 40px 0;
`;

export const Date = styled.div`
  h2 {
    font-size: 2.5rem;
    margin: 0;
  }
  p {
    font-size: 1.75rem;
    margin: 0;
    color: #989898;
    font-weight: 300;
  }
`;

export const Temp = styled.div`
  --border: solid 0.25em #613131;
  border-left: var(--border);
  border-right: var(--border);
  padding: 0 2em;
`;

export const Wind = styled.div`
  display: grid;
  .section-title,
  .reading {
    grid-column: 2 / 3;
  }
  .wind__direction {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    display: -ms-grid;
    display: grid;
    place-items: center;
    grid-row: 1 / span 2;
  }
  .wind__arrow {
    --direction: ${(props) => props.deg + "deg"};
    --size: 0.8rem;
    height: calc(var(--size) * 3);
    width: var(--size);
    background: #613131;
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    transform: translateY(-50%) rotate(var(--direction));
    transform-origin: bottom center;
    transition: -webkit-transform 500ms ease;
    transition: transform 500ms ease;
    transition: transform 500ms ease, -webkit-transform 500ms ease;
  }
`;
