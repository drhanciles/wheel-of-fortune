const chai = require('chai');
const expect = chai.expect;
const Game = require('../lib/Game.js');
// const spies = require('chai-spies');
// chai.use(spies);

// global.domUpdates = require('../lib/domUpdates.js');
// chai.spy.on(global.domUpdates, [], () => true);

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should instantiate a new Game class', () => {
    expect(game).to.be.an.instanceof(Game);
  })

})