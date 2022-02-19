const App = () => (
  <>
    <div class="cards-container">
      <div class="usercard">
        <div class="usercard__userinfo">
          <img
            src="./img/image-jeremy.png"
            alt=""
            class="usercard__avatarimg"
          />
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
      <div class="card card--work">
        <div class="card__topaccent">
          <img
            src="./img/icon-work.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
      <div class="card card--play">
        <div class="card__topaccent">
          <img
            src="./img/icon-play.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
      <div class="card card--study">
        <div class="card__topaccent">
          <img
            src="./img/icon-study.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
      <div class="card card--exercise">
        <div class="card__topaccent">
          <img
            src="./img/icon-exercise.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
      <div class="card card--social">
        <div class="card__topaccent">
          <img
            src="./img/icon-social.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
      <div class="card card--self-care">
        <div class="card__topaccent">
          <img
            src="./img/icon-self-care.svg"
            alt="accent icon"
            class="card__topaccentimg"
          />
        </div>
        <div class="card__maincard">
          <div class="card__titlebar">
            <h2 class="card__title">Work</h2>
            <button class="card__menubutton">
              <img
                src="./img/icon-ellipsis.svg"
                alt="ellipsis icon"
                class="card__ellipsisicon"
              />
            </button>
          </div>
          <div class="card__stats-container">
            <h3 class="card__hours">10hrs</h3>
            <small class="card__pastinfo">
              Last <span class="card__pasttimeperiod">Week</span> -
              <span class="card__pasthours">8hrs</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
