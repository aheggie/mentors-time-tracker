import Card from "./Card";
import UserCard from "./UserCard";

const App = () => (
  <>
    <UserCard />
    <Card cardName="work" modifierClass="card--work" imgFile="icon-work.svg" />
    <Card
      cardName="exercise"
      modifierClass="card--exercise"
      imgFile="icon-exercise.svg"
    />
    <Card cardName="play" modifierClass="card--play" imgFile="icon-play.svg" />
    <Card
      cardName="social"
      modifierClass="card--social"
      imgFile="icon-social.svg"
    />
    <Card
      cardName="study"
      modifierClass="card--study"
      imgFile="icon-study.svg"
    />
    <Card
      cardName="self care"
      modifierClass="card--self-care"
      imgFile="icon-self-care.svg"
    />
  </>
);

export default App;
