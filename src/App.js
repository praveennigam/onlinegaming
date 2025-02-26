import React from 'react';
import { Helmet } from 'react-helmet';
import Game from './Game';

function App() {
  return (
    <div>
      <Helmet>
        <title>Online Gaming Hub | Play Rummy, Casino, Slots, Aviator & More</title>
        <meta
          name="description"
          content="Explore exciting and immersive online gaming experiences including Rummy, Casino Games, Slots, Aviator Game, Color Game, and more."
        />
        <meta
          name="keywords"
          content="rummy game app, online rummy, best rummy app, play rummy online, rummy app download, new rummy apps, real money rummy, free rummy games, play rummy for money, rummy card game, online rummy apk, rummy with friends, rummy game download, rummy game for android, rummy game for ios, rummy cash game, Teen Patti app, online Teen Patti, play Teen Patti for money, Teen Patti game app, best Teen Patti app, Teen Patti download, Teen Patti real money, Teen Patti online, aviator game, aviator game app, best aviator app, play aviator for money, aviator game online, color game, color game app, play color game, color game online, color game for money, fun color game app"
        />
      </Helmet>
      <Game />
    </div>
  );
}

export default App;
