//闭包限定命名空间
(function($) {
    $.fn.extend({
        "ImgBanner": function(options) {
            var opts = $.extend({}, defaluts, options);
            this.each(function() {
                var $this = $(this);

                function options(options) {
                    var LeftSlide = $this.find(".left-slide")
                    var LeftBdUL = LeftSlide.find(".bd ul");
                    var BigImg = $this.find(".bigimg img")
                    var picsHtml = "";
                    var leftPicNum = LeftSlide.find(".bd ul li").length;
                    var leftPicLi = LeftSlide.find(".bd ul li");
                    var index = 1;
                    var target = 0;
                    var oBtnNext = $this.find(".left-slide #next");
                    var oBtnPrev = $this.find(".left-slide #prev");
                    var timer;
                    BigImg.attr("src", LeftSlide.find(".bd ul li").eq(0).find("img").attr("src"))
                    LeftBdUL.append(picsHtml);
                    var PicWid = LeftBdUL.find("li")[0].offsetWidth;
                    LeftBdUL.find("li").eq(0).find("img").addClass("on")
                    LeftBdUL[0].style.width = PicWid * leftPicNum + "px";
                    oBtnNext.a = function() {
                        index++;
                        if (index == leftPicNum + 1) {
                            index = 1;
                        }
                        tab();
                        LeftBdUL.find("li").eq(index - 2).find("img").removeClass("on");
                    }
                    oBtnNext.on("click", oBtnNext.a)
                    oBtnPrev.onclick = function() {
                        index--;
                        if (index == 0) {
                            index = leftPicNum;
                        }
                        tab();
                        LeftBdUL.find("li").eq(index).find("img").removeClass("on");
                    }
                    oBtnPrev.on("click", oBtnPrev.onclick);
                    if (options.autoPlay) {
                        autopaly();
                    }

                    function StatMove(Target) {
                        if (LeftBdUL[0].offsetWidth > LeftSlide[0].offsetWidth) {
                            LeftBdUL.animate({
                                left: Target + 'px'
                            }, 500);
                        }
                        BigImg.attr("src", LeftSlide.find(".bd ul li").eq(index - 1).find("img").attr("src"))
                        LeftBdUL.find("li").eq(index - 1).find("img").addClass("on");
                    }

                    function tab() {
                        if (index == 1) {
                            target = 0;
                        } else if (index == 0) {
                            target = -PicWid * (leftPicNum - 4)
                        } else if (index == leftPicNum) {
                            target = -PicWid * (leftPicNum - 4);
                        } else if (index == leftPicNum - 1) {
                            target = -PicWid * (leftPicNum - 4);
                        } else if (index == leftPicNum - 2) {
                            target = -PicWid * (leftPicNum - 4);
                        } else if (index == leftPicNum - 3) {
                            target = -PicWid * (leftPicNum - 4);
                        } else {
                            target = -PicWid * (index - 1);
                        }
                        StatMove(target);
                    }


                    function autopaly() {
                        timer = setInterval(oBtnNext.a, options.Time);
                    }

                    function stopplay() {
                        clearInterval(timer);
                    }
                    LeftSlide.mouseover(function() {
                        stopplay();
                    })
                    LeftSlide.mouseout(function() {
                        autopaly();
                    })
                    for (var i = 0; i < leftPicNum; i++) {
                        leftPicLi[i].index = i;
                        leftPicLi[i].onclick = function() {
                            $(this).find("img").addClass("on").parent().siblings().find("img").removeClass("on")
                            index = this.index + 1;
                            tab();
                        }
                    }
                }
                options(opts);
            });

        }
    });
    var defaluts = {
        autoPlay: true, //是否自动运行
        Time: 1000 //滑动时间
    };
})(window.jQuery);