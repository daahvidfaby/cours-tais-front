var Player = (function() {

    var $container,
        $pause,
        $play,
        $status,
        model = {
            status: 'Playing',
            songs: [
                {artist: "Ray Charles", song: "Georgia On My Mind"},
                {artist: "Sarah Vaughan", song: "What a Difference a Day Makes"}
            ],
            songIndex: 0
        },
        self = {};


    self.init = function(container) {
        initContainer(container);
        createButtons();
        createStatus();
        initListeners();
    }

    function initContainer(container) {
        $container = container;
    }

    function createButtons() {
        $play = $('<button>').addClass('play').
                              text('Play');
        $pause = $('<button>').addClass('pause').
                              text('Pause');
        $container.append($play, $pause);
    }

    function createStatus() {
        $status = $('<div>').addClass('status').
                             text('Status : ' +model.status);
        $container.prepend($status);
    }

    function initListeners() {
        $play.click(function() {
            model.status = 'Playing';
            renderModel();
        });
        $pause.click(function() {
            model.status = 'Paused';
            renderModel();
        });
    }

    function renderModel() {
        $container.find('.status').text('Status : ' +model.status);
    }

    return self;
}());

Player.init($('.player-container'));
