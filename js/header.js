$("header").html(`
        <div id="menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12" style="text-align: center;">
                        <div class="logo pull-left">
                            <img onclick="location.href='./index.html';" class="visible-lg visible-md visible-sm" src="./images/logo/logo.png" alt="로고">
                            <img onclick="location.href='./index.html';" class="visible-xs inline-block" src="./images/logo/320_logo.png" alt="로고">
                        </div>
                        <div>
                            <ul class="gnb pull-right visible-lg">
                                <li class="pull-left"><a href="./intro.html">캠핑장소개</a>
                                    <ul class="submenu">
                                        <li><a href="./tourist.html">주변관광지</a></li>
                                    </ul>
                                </li>
                                <li class="pull-left"><a href="./facility.html">캠핑시설소개</a>
                                    <ul class="submenu">
                                        <li><a href="./conv.html">편의시설</a></li>
                                        <li><a href="./info.html">이용안내</a></li>
                                    </ul>
                                </li>
                                <li class="pull-left"><a href="./reservation.html">예약안내</a>
                                    <ul class="submenu">
                                        <!-- <li><a href="./reservation.html">주의사항</a></li>  -->
                                        <li onclick="alert('현재 준비중인 사이트입니다.');"><a href="#">예약하기</a></li>
                                        <li onclick="alert('현재 준비중인 사이트입니다.');"><a href="#">예약확인</a></li>
                                    </ul>
                                </li>
                                <li class="pull-left"><a href="./gallery.html">포토갤러리</a></li>
                            </ul>

                            <div class="menuBar hidden-lg">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidemenu" style="overflow: hidden;">
            <div class="side-close" style="cursor: pointer;">
                <div class="menu_close">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul class="side">
                <li><a href="./intro.html">캠핑장소개</a><img class="side-arr on" src="./images/main/arr.png" alt="화살표">
                    <ul class="side-lnb">
                        <li><a href="./tourist.html">주변관광지</a></li>
                    </ul>
                </li>
                <li><a href="./facility.html">캠핑시설소개</a><img class="side-arr" src="./images/main/arr.png" alt="화살표">
                    <ul class="side-lnb">
                        <li><a href="./conv.html">편의시설</a></li>
                        <li><a href="./info.html">이용안내</a></li>
                    </ul>
                </li>
                <li><a href="./reservation.html">예약안내</a><img class="side-arr" src="./images/main/arr.png" alt="화살표">
                    <ul class="side-lnb">
                        <!-- <li><a href="./reservation.html">주의사항</a></li> -->
                        <li><a href="#">예약하기</a></li>
                        <li><a href="#">예약확인</a></li>
                    </ul>
                </li>
                <li><a href="./gallery.html">포토갤러리</a></li>
            </ul>
        </div>
        `)