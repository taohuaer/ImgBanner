###  ImgBanner
    兼容性好的图片轮播，可点击切换图片
### 效果展示
![效果](https://github.com/taohuaer/ImgBanner/blob/master/ingbanner.gif)
### 使用说明
1.下载源码
2.添加html结构
```
  <div class="bannerbox clearfix">
        <div class="bigimg">
            <img src="" alt="">
        </div>
        <div class="left-slide fl">
            <div class="bd">
                <ul>
                    <li>
                        <img src="https://dummyimage.com/100x77/708093/fff" alt="">
                    </li>
                    <li>
                        <img src="https://dummyimage.com/100x77/008B45/fff" alt="">
                    </li>
                    <li>
                        <img src="https://dummyimage.com/100x77/50847C/fff" alt="">
                    </li>
                    <li>
                        <img src="https://dummyimage.com/100x77/641670/fff" alt="">
                    </li>
                    <li>
                        <img src="https://dummyimage.com/100x77/808F7C/fff" alt="">
                    </li>
                    <li>
                        <img src="https://dummyimage.com/100x77/191970/fff" alt="">
                    </li>
                </ul>
            </div>
            <!-- <div class="hd">
                <ul>
                </ul>
            </div> -->
            <a href="javascript:;" id="prev" class="arrow">&lt;</a>
            <a href="javascript:;" id="next" class="arrow">&gt;</a>
        </div>
    </div>
```
3.引入css和js
```css
 <link rel="stylesheet" href="index.css">
<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-2.1.4.min.js"></script>
<script src="index.js"></script>
```
4.初始化插件
```js
    $(".bannerbox").ImgBanner({
        autoPlay: true,
        Time: 1000,
    });
```
### 参数设置
### 浏览器兼容性
```
    谷歌
    ie
    火狐等主流浏览器
```
