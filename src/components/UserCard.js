const UserCard = () => (
  <div class="usercard">
    <div class="usercard__userinfo">
      <img src="./img/image-jeremy.png" alt="" class="usercard__avatarimg" />
      <div class="usercard__name-container">
        <small class="usercard__reportfor">Report For</small>
        <h1 class="usercard__name">Jeremy Robson</h1>
      </div>
    </div>
    <div class="usercard__navarea">
      <ul class="usercard__navlist">
        <li class="usercard__navitem">Daily</li>
        <li class="usercard__navitem usercard__navitem--active">Weekly</li>
        <li class="usercard__navitem">Monthly</li>
      </ul>
    </div>
  </div>
);

export default UserCard;
