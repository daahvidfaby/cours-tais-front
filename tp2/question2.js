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
        initWidget();
        getWidget();
        renderModel();
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
            updateStatus('play');
            renderModel();
        });
        $pause.click(function() {
            updateStatus('pause');
            renderModel();
        });
    }

    function initWidget() {
        $container.prepend($('<iframe>').attr({
            'width': "100%",
            'height': "450",
            'scrolling': "no",
            'frameborder': "no",
            'src': "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/142546852&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        }));
    }

    function getWidget() {
        self.widget = SC.Widget($container.find('iframe')[0]);
    }

    function updateWidget() {
        self.widget.bind(SC.Widget.Events.READY, function() {
            if(model.status === 'Playing') {
                self.widget.isPaused(function(status) {
                    if(status === true) {
                        self.widget.play();
                    }
                });
            }
            else if(model.status === 'Paused') {
                self.widget.pause();
            }
        });
    }

    function updateStatus(status) {
        switch(status) {
        case 'play':
            model.status = 'Playing';
            break;
        case 'pause':
            model.status = 'Paused';
            break;
        default:
            model.status = 'Paused';
        }

    }

    function renderModel() {
        $container.find('.status').text('Status : ' +model.status);
        updateWidget();
    }

    return self;
}());

$(document).ready(function() {
    Player.init($('.player-container'));
});
