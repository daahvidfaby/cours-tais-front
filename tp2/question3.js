var Player = (function() {

    var $container,
        elements,
        model = {
            status: 'Playing',
            songs: [
                {artist: "Ray Charles", song: "Georgia On My Mind"},
                {artist: "Sarah Vaughan", song: "What a Difference a Day Makes"}
            ],
            songIndex: 0
        },
        self = {},
        widgetReady = false;

    self.init = function(container) {
        initContainer(container);
        createElements();
        initListeners();
        initWidget();
        renderModel();
    }

    function initContainer(container) {
        $container = container;
        self.container = container;
    }

    function createElements() {
        elements = {
            status: $('<div>').
                        addClass('status').
                        text('Status : ' +model.status),
            song: $('<div>').
                        addClass('song').
                        text('Chanson : '),
            play: $('<button>').
                        addClass('play').
                        data('action', 'play').
                        text('Play'),
            pause: $('<button>').
                        addClass('pause').
                        data('action', 'pause').
                        text('Pause'),
            prev: $('<button>').
                        addClass('prev').
                        data('action', 'prev').
                        text('Prev'),
            next: $('<button>').
                        addClass('next').
                        data('action', 'next').
                        text('Next')
        }

        $.each(elements, function(index, value) {
            $container.append(value);
        });
    }

    function initListeners() {
        var actions = ['play', 'pause', 'prev', 'next'];
        $.each(actions, function(index, action) {
            elements[action].click(function() {
                updateModel(action);
            });
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
        self.widget = SC.Widget($container.find('iframe')[0]);
        self.widget.bind(SC.Widget.Events.FINISH, function() {
            updateModel('next');
        });
        getSongs();
    }

    function isWidgetReady(callback) {
        if (!widgetReady) {
            self.widget.bind(SC.Widget.Events.READY, function() {
                widgetReady = true;
                callback();
            });
            return;
        }
    }

    function getSongs() {
        isWidgetReady(getSongs);
        self.widget.getSounds(function(sounds) {
            model.songs = [];
            $.each(sounds, function(index, sound) {
                model.songs.push({
                    artist: sound.user.username,
                    song: sound.title
                })
            });
        });
    }

    function updateWidget() {
        isWidgetReady(updateWidget);
        if(model.status === 'Playing') {
            self.widget.isPaused(function(status) {
                if(status === true) {
                    self.widget.play();
                }
            });
        }
        else if(model.status === 'Paused') {
            self.widget.isPaused(function(status) {
                if(status !== true) {
                    self.widget.pause();
                }
            });
        }
        self.widget.getCurrentSoundIndex(function(index) {
            if(index !== model.songIndex) {
                self.widget.skip(model.songIndex);
            }
        });
    }

    function updateModel(type) {
        switch(type) {
        case 'play':
            model.status = 'Playing';
            break;
        case 'pause':
            model.status = 'Paused';
            break;
        case 'prev':
            if(model.songIndex > 0) {
                model.songIndex--;
                model.status = 'Playing';
            }
            break;
        case 'next':
            self.widget.getSounds(function(sounds) {
                if(model.songIndex < sounds.length) {
                    model.songIndex++;
                    model.status = 'Playing';
                }
            });
            break;
        default:
            break;
        }
        setTimeout(renderModel, 100);
    }

    function renderModel() {
        elements.status.text('Status : ' +model.status);
        elements.song.text('Chanson : ' + model.songs[model.songIndex].artist + ' - ' + model.songs[model.songIndex].song);
        updateWidget();
    }

    return self;
}());

$(document).ready(function() {
    Player.init($('.player-container'));
});
