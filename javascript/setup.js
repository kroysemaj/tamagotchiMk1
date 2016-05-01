function tamagotchi() {

  var stats = {
    hunger: 50,
    fullness: 50,
    happiness: 50
  };

  function init(){
    setInterval(function(){
      increase('hunger');
      decrease('happiness');
    }, 60000);
  }

  function feed(){
    decrease('hunger');
    increase('fullness');
  }

  function play(){
    increase('happiness');
  }

  function poo() {
    decrease('fullness')
  }

  function increase(stat){
    changeStat(stat, 'up');
  }

  function decrease(stat){
    changeStat(stat, 'down');
  }

  function changeStat(stat, direction){
    if(direction === 'up'){
      stats[stat] += 10;
    } else {
      stats[stat] -= 10;
    }
  }

  function getMood() {
    if (stats.hunger === 100) {
      return '💀';
    }
    if(stats.hunger >= 70){
      return '😾';
    }
    return 'Content';

  }


  init();

  return {
    getMood: getMood,
    stats: stats,
    feed : feed,
    play: play,
    poo: poo

  };
}