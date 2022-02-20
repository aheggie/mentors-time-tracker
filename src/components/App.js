import Card from "./Card";
import UserCard from "./UserCard";

const App = () => (
  <>
    <UserCard />
    <Card cardName="work" />
    <Card cardName="exercise" />
    <Card cardName="play" />
    <Card cardName="social" />
    <Card cardName="study" />
    <Card cardName="self care" />
  </>
);

export default App;
