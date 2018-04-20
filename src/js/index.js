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
                },
                autoplay: {
                    delay: 2000,
                },
                loop : true
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
            for (let i =0; i < $('.recruitment-content-brief').length; i++) {
                $('.recruitment-content-brief').eq(i).html($('.recruitment-content-detail').eq(i).html().replace(/<[^>]+>/g, ''))
            }
            $('.recruitment-list').on('click', '.describe-close ', (e) => {
                $(e.currentTarget).hide().siblings('.describe-open').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-detail').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-brief').hide()
            })
            $('.recruitment-list').on('click', '.describe-open ', (e) => {
                $(e.currentTarget).hide().siblings('.describe-close').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-brief').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-detail').hide()

            })
            $('.apply').on('change', (e) => {
                let formData = new FormData()
                let file = $(e.currentTarget).find('input')[0].files[0]
                formData.append('file', file)
                $.ajax({
                    url: '/upload', // 地址
                    type: 'POST',
                    cache: false,
                    data: formData,
                    processData: false,
                    contentType: false
                }).done(function(res) {
                    spop({
                        template: '上传成功',
                        style: 'success',
                        autoclose: 5000,
                        position  : 'top-center'
                    });
                }).fail(function(res) {
                    spop({
                        template: '上传失败',
                        style: 'error',
                        position  : 'top-center'
                    });
                });

            })
        }

    }
    controll.init()
}