var model = {
  cards: [{
    "id": 1,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/1.png",
    "status": "verso"
  }, {
    "id": 1,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/1.png",
    "status": "verso"
  }, {
    "id": 2,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/2.png",
    "status": "verso"
  }, {
    "id": 2,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/2.png",
    "status": "verso"
  }, {
    "id": 3,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/3.png",
    "status": "verso"
  }, {
    "id": 3,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/3.png",
    "status": "verso"
  }, {
    "id": 4,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/4.png",
    "status": "verso"
  }, {
    "id": 4,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/4.png",
    "status": "verso"
  }, {
    "id": 5,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/5.png",
    "status": "verso"
  }, {
    "id": 5,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/5.png",
    "status": "verso"
  }, {
    "id": 6,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/6.png",
    "status": "verso"
  }, {
    "id": 6,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/6.png",
    "status": "verso"
  }, {
    "id": 7,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/7.png",
    "status": "verso"
  }, {
    "id": 7,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/7.png",
    "status": "verso"
  }, {
    "id": 8,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/8.png",
    "status": "verso"
  }, {
    "id": 8,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/8.png",
    "status": "verso"
  }, {
    "id": 9,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/9.png",
    "status": "verso"
  }, {
    "id": 9,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/9.png",
    "status": "verso"
  }, {
    "id": 10,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/10.png",
    "status": "verso"
  }, {
    "id": 10,
    "picture": "https://raw.githubusercontent.com/iut-haguenau-dweb/repository-2016/master/lessons/lesson3/10.png",
    "status": "verso"
  }],
  flippedCards:[]
};

$(document).ready(function(){
  $container = $('div.memory-container');

  function renderModel() {
    $container.empty();
    model.cards.forEach(function(card) {
      var $card = $('<div>').addClass('card').addClass(card.status).attr('data-value', card.id)
        .append($('<img>').attr('src', card.picture));
      $container.append($card);
    });
    console.log('render');
  }
  renderModel();

  function generateRandom(cards){
  if(cards.length === 1){
  	return cards;
  }
    var firstObject = cards[0];
    var randomNumber = parseInt(Math.random()*cards.length);
    var randomObject = cards[randomNumber];
    cards[0] = randomObject;
    cards[randomNumber] = firstObject;
    $('#text').html(randomNumber);
    var resteDescards = cards.slice(1);
    return [cards[0]].concat(generateRandom(resteDescards));
}

model.cards = generateRandom(model.cards);

(function eventHandling(){
  $container.on('click', '.card', function() {
    var $this = $(this),
        index = $this.index();

    model.cards[index].status = "recto";

    model.flippedCards.push(model.cards[index]);

    if(model.flippedCards.length==2 && model.flippedCards[0].id === model.flippedCards[1].id) {
        model.flippedCards[0].status = 'rectoOk';
        model.flippedCards[1].status = 'rectoOk';
    }
    else if(model.flippedCards.length==3) {
      if(model.flippedCards[0].status=='rectoOk') {
        model.flippedCards[0].status = 'invisible';
        model.flippedCards[1].status = 'invisible';
      }
      else {
        model.flippedCards[0].status = 'verso';
        model.flippedCards[1].status = 'verso';
      }
      var tmp=model.flippedCards[2];
      model.flippedCards = [tmp];
    }

    renderModel();
  });
})();



});
