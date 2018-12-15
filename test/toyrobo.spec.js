ToyRobo = require('../src/toyrobo.js');
chalk = require('chalk');
byline = require('byline');

test('check initial config: placed to be false', () => {
  var robo = new ToyRobo();
  expect(robo.placed).toBe(false);
});

test('check initial config: x to be null', () => {
    var robo = new ToyRobo();
    expect(robo.x).toBe(null);
  });

  test('check initial config: y to be null', () => {
    var robo = new ToyRobo();
    expect(robo.y).toBe(null);
  });

  test('check initial config: face to be null', () => {
    var robo = new ToyRobo();
    expect(robo.face).toBe(null);
  });

  test('load sample data', () => {
    var robo = new ToyRobo();
    var data = ['PLACE 0,0,NORTH', 'MOVE', 'REPORT'];
    robo.loadData(data);
    expect(robo.x).toEqual(0);
    expect(robo.y).toEqual(1);
    expect(robo.face.toUpperCase()).toEqual('NORTH');
  });
