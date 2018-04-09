{
    let controll = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            this.slideInit()
            this.featureInit()
        },
        slideInit () {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                }
            });
        },
        featureInit () {
            $('.feature li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
            $('.feature li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
        },

    }
    controll.init()
}