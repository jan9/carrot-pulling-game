'use strict';

import Info from './info.js';
import GameBuilder, { Reason } from './game.js';
import * as sound from './sound.js';

const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME_DURATION_SEC = 15;

const game = new GameBuilder()
  .gameDuration(GAME_DURATION_SEC)
  .carrotCount(CARROT_COUNT)
  .bugCount(BUG_COUNT)
  .build();

const gameFinishBanner = new Info();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      sound.stopAlert();
      message = 'Replay?';
      break;
    case Reason.win:
      sound.playWin();
      message = 'You WIN!';
      break;
    case Reason.lose:
      sound.stopAlert();
      message = 'You LOSE!';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
