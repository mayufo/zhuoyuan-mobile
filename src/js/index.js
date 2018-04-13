{
    let controll = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            this.menuInit()
            this.slideInit()
            this.featureInit()
            // 招聘初始化
            this.recruitmentInit()
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
            $('.feature li').on('mouseenter', (e) => {
                $(e.currentTarget).addClass('active')
            })
            $('.feature li').on('mouseleave', (e) => {
                $(e.currentTarget).removeClass('active')
            })
        },
        menuInit () {
            // 当有子菜单的时候显示icon
            $('.menu-list > li').has('.child-menu').find('.icon-arrow-down').show()

            $('.icon-menu').on('click', () => {
                $('.nav-menu').show();
            })
            $('.close').on('click', () => {
                $('.nav-menu').hide();
            })
            $('.menu-list > li').on('click', (e) => {
                if ($(e.currentTarget).find('.child-menu').length > 0) {
                    $(e.currentTarget).find('a').toggleClass('active')
                    $(e.currentTarget).find('.child-menu').toggle();
                }
            })
        },
        recruitmentInit () {
            $('.recruitment-content-brief').html($('.recruitment-content-detail').html().replace(/<[^>]+>/g, ''))
            $('.recruitment-list').on('click', '.describe-close ', (e) => {
                $(e.currentTarget).hide().parent().find('.describe-open').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-detail').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-brief').hide()
            })
            $('.recruitment-list').on('click', '.describe-open ', (e) => {
                $(e.currentTarget).hide().parent().find('.describe-close').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-brief').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-detail').hide()

            })
        }

    }
    controll.init()
}