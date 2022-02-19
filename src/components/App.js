import Card from "./Card";
import UserCard from "./UserCard";

const App = () => (
  <>
    <UserCard />
    <Card title="Work" modifierClass="card--work" imgFile="icon-work.svg" />
    <Card
      title="Exercise"
      modifierClass="card--exercise"
      imgFile="icon-exercise.svg"
    />
    <Card title="Play" modifierClass="card--play" imgFile="icon-play.svg" />
    <Card
      title="Social"
      modifierClass="card--social"
      imgFile="icon-social.svg"
    />
    <Card title="Study" modifierClass="card--study" imgFile="icon-study.svg" />
    <Card
      title="Self Care"
      modifierClass="card--self-care"
      imgFile="icon-self-care.svg"
    />
  </>
);

export default App;
