class Gallery {
    constructor() {
        this._buttons = $('.animal-logo');
        this._gallery = $('#gallery');
        this._arrow = $('.arrow');
        this._category = $('.category');
    }

    activateHide() {
        $(`.arrow`).click(() => {
            if (this._arrow.attr('src') === './assets/logo/arrow-up.png') {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        $(`.category img:nth-child(${i + 1})`).css({ 'transform': 'translateY(-150px)' });

                        $(`#gallery img:nth-child(${i + 1})`).css({ 'transform': 'translateY(-1100px)' });

                        i === 4 ? setTimeout(() => { this._gallery.html('') }, 500) : null;
                    }, i * 100);
                }
            } else {
                for (let i = 5; i > 0; i--) {
                    setTimeout(() => {
                        $(`.category img:nth-child(${i})`).css({ 'transform': 'translateY(0px)' });
                    }, 5 / i * 100);
                }

                $(`<img>`, {
                    src: `./assets/logo/gallery.png`,
                    alt: '...'
                }).appendTo(this._gallery);
                $(`#gallery img`).css({ 'transform': 'translateY(-1100px)' });

                setTimeout(() => {
                    $(`#gallery img`).css({ 'transform': 'translateY(0px)' });
                }, 500);

            }

            let url = this._arrow.attr('src') === './assets/logo/arrow-down.png' ? './assets/logo/arrow-up.png' : './assets/logo/arrow-down.png';
            this._arrow.attr('src', url);
        });
    }

    loadImages(d, p) {
        this._gallery.html('');

        for (let i = 1; i <= 5; i++) {
            $(`<img>`, {
                src: `./assets/imgs/${d}/${p}${i}.jpg`,
                alt: '...',
                class: 'mini-photo'
            }).appendTo(this._gallery);
        }
    }

    activateGallery() {
        this._buttons.click((e) => {
            let url = $(e.target).attr('src');

            this.loadImages(
                url === './assets/logo/cat.png' ? 'cat' :
                    url === './assets/logo/dog.png' ? 'dog' :
                        url === './assets/logo/humster.png' ? 'hamster' :
                            url === './assets/logo/bird.png' ? 'bird' :
                                url === './assets/logo/horse.png' ? 'horse' : null,
                url === './assets/logo/cat.png' ? 'c' :
                    url === './assets/logo/dog.png' ? 'd' :
                        url === './assets/logo/humster.png' ? 'h' :
                            url === './assets/logo/bird.png' ? 'b' :
                                url === './assets/logo/horse.png' ? 'h' : null);
        });
    }

    activateBigPhoto() {
        $('#gallery').on('click', 'img', (e) => {
            let url = $(e.target).attr('src');

            $('#bigPhoto .content').html('');
            $('#bigPhoto').css({
                'width': '100%',
                'height': '100%'
            })
            $('.cross').css({
                'width': '60px',
                'height': '60px'
            })

            $(`<img>`, {
                src: url,
                alt: '...'
            }).appendTo('#bigPhoto .content');
        });

        $('.cross').click(() => {
            $('#bigPhoto .content').html('');
            $('#bigPhoto').css({
                'width': '0px',
                'height': '0px'
            })
            $('.cross').css({
                'width': '0px',
                'height': '0px'
            })
        });
    }
}