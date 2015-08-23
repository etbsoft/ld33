'use strict';

var PlayScene = require('./play_scene.js');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('logo', 'images/phaser.png');
    this.game.load.image('monster', 'images/monster.png');
    this.game.load.image('walker', 'images/walker.png');
    this.game.load.image('flyer', 'images/flyer.png');
    this.game.load.image('bullet', 'images/bullet.png');
    this.game.load.image('soldier', 'images/soldier.png');
    this.game.load.image('bomb', 'images/bomb.png');
    this.game.load.image('shield', 'images/shield.png');
  },

  create: function () {
    this.game.state.start('play');
  }
};


window.onload = function () {
  window.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};