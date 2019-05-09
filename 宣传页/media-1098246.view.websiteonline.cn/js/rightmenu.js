// JavaScript Document
$(document).ready(function () {
    //qrcode hover
    $(".wp_celan_content .pqr").hover(
            function () {
                $(this).find("b").show();
                $('.wp_celan_content').css('z-index', '1000000')
            },
            function () {
                $(this).find("b").hide();
                $('.wp_celan_content').css('z-index', '10000')
            }
        );
    
    //左侧栏
    if($.sidebar_aleft) {
	$(".wp_celan_content").animate({ "left": "0px" });
    }else $(".wp_celan_content").animate({ "right": ($('#scroll_container').width() - $('#scroll_container_bg').width())+"px" });

    var wp_celan_meau_control = 1;
    if (wp_celan_meau_control == "1") {
        $(".wp_celan_content_open").show();
        $(".wp_celan_content_open").hide();
        $('#wp_celan_meau').show();
    }
    $(function () {
//        $(window).scroll(function () {
        //滚轮上行后显示
        $('#scroll_container').scroll(function () {
            //if ($(this).scrollTop() > 150) {
            if ($('#scroll_container').scrollTop() > 150) {
                //$('.wp_celan_content p.ptop').fadeIn();
            }else{
               // $('.wp_celan_content p.ptop').fadeOut();
            }
        })

        $('.wp_celan_content p.ptop').click(function () {
            if (!$("html,body").is(":animated")) {
//                $('#scroll_container').scrollTop
               /// $('body,html').animate({ scrollTop: 0 }, 800);
                $('#scroll_container').animate({ scrollTop: 0 }, 800);
            }
            return false;
        })
    })

    //客服列表滚动条
    /**
    var hh = $(window).height() - $('.rm_kf .rm_t').height() - $('.rm_kf .rm_bz_b').height() - 167;
    if ($('.detail_kf').height() < hh) {
        $('.detail_kf').css('overflow', 'hidden');
    }else{
        $('.detail_kf').css({ overflowY: 'scroll', overflowX: 'hidden' });
        $('.detail_kf').css('height', hh);
    }
    */
    //kf topHeight
    var height = $(window).height();
    // pwb,pqr,ptop height
    var plist_h = (69*5)-69;
    $('.wp_celan_content p:first').css('marginTop', ((height-plist_h-120)/2)+'px');
    var kf_detail = $('#wp_celan_meau .wp_celan_detailcontent .detail_info').outerHeight();
    var detail_top = (height-kf_detail)/2;
    $('#wp_celan_meau .wp_celan_detailcontent').css('paddingTop', detail_top+'px');
    //if (height <= 840) {
        $('.wp_celan_content p.pwb').css('bottom', '92px')
        $('.wp_celan_content p.pqr').css('bottom', '50px')
        //$('.wp_celan_content p.p6').css('bottom', '60px')
        //$('#wp_celan_meau .p8').css('bottom', '200px')
    //}
    //关闭详情内容动作
    $('.wp_celan_content p.pwb,.wp_celan_content p.pqr,.wp_celan_content p.ptop').click(function () {
        $('.rm_login').stop().fadeOut(200);
		$('.wp_celan_detailcontent').css('z-index', '10');
		if($.sidebar_aleft) $('.wp_celan_detailcontent,.rm_bz,.rm_kf').stop().animate({ left: '-291px' }, 300);
        else $('.wp_celan_detailcontent,.rm_bz,.rm_kf').stop().animate({ right: '-291px' }, 300);
		$('.wp_celan_content').find('.s_arrow').css("display","none");
		$('.wp_celan_content').find('p.p3').css("background", "none");
    });
    $('#wp_celan_meau').siblings().click(function () {
		$('.rm_login').stop().fadeOut(200);
		$('.wp_celan_detailcontent').css('z-index', '10');
		if($.sidebar_aleft) $('.wp_celan_detailcontent,.rm_bz,.rm_kf').stop().animate({ left: '-291px' }, 300);
		else $('.wp_celan_detailcontent,.rm_bz,.rm_kf').stop().animate({ right: '-291px' }, 300);
		//kf_close
		$('.wp_celan_content').find('.s_arrow').css("display","none");
		$('.wp_celan_content').find('p.p3').css("background", "none");
    })
    //客服列表事件
    $("#wp_celan_meau .wp_celan_detailcontent .detail_info li a").hover(
	    function () {
		if ($(this).attr('class') == "qq") {
		    $(this).find('.detail_kf_ico_qq').css({"background":"url("+$.sidebar_pathimg+"icon_view_qq_h.png)"});
		    $(this).find('.detail_kf_ico_qq_on').css({"background":"url("+$.sidebar_pathimg+"icon_view_qq_h.png)"});
		}
		if ($(this).attr('class') == "skype") {
		    $(this).find('.detail_kf_ico_skype').css({"background":"url("+$.sidebar_pathimg+"icon_view_skype_h.png)"});
		}
		if ($(this).attr('class') == "ww") {
		    $(this).find('.detail_kf_ico_ww').css({"background":"url("+$.sidebar_pathimg+"icon_view_ww_h.png)"});
		    $(this).find('.detail_kf_ico_ww_online').css({"background":"url("+$.sidebar_pathimg+"icon_view_ww_h.png)"});
		}
	    },
	    function () {
		if ($(this).attr('class') == "qq") {
		    $(this).find('.detail_kf_ico_qq').css({"background-image":"url("+$.sidebar_pathimg+"icon_view_qq.png)","background-color":"#d1d1cf"});
		    $(this).find('.detail_kf_ico_qq_on').css({"background-image":"url("+$.sidebar_pathimg+"icon_view_qq.png)","background-color":$.sidebar_menuclolr});
		}
		if ($(this).attr('class') == "skype") {
		    $(this).find('.detail_kf_ico_skype').css({"background-image":"url("+$.sidebar_pathimg+"icon_view_skype.png)","background-color":"#d1d1cf"});
		}
		if ($(this).attr('class') == "ww") {
		    $(this).find('.detail_kf_ico_ww').css({"background-image":"url("+$.sidebar_pathimg+"icon_view_ww.png)","background-color":"#d1d1cf"});
		    $(this).find('.detail_kf_ico_ww_online').css({"background-image":"url("+$.sidebar_pathimg+"icon_view_ww.png)","background-color":$.sidebar_menuclolr});
		}
	    }
    );
    var ww = $(window).width();
    if (ww <= 1360) {

    } else {
        //  $('#wp_celan_meau').show()
    }
    //关闭登录窗口
//    function remove_login(){
//	$('#wp_sidebar_dialog_login,#wp-floatpanel_overlay').remove();
//    }

//skin02 js
$('li.sgotopdd img.hover').click(function () {
	if (!$("html,body").is(":animated")) {
		$('#scroll_container').animate({ scrollTop: 0 }, 800);
	}
	return false;
})

$('.wpsidebar02 li.smessage img.hover').click(function () {
	console.log("",$.sidebar_linkstr,$.sidebar_linkstr.message.linkurl);
	if ($.sidebar_linkstr.message.linkurl) {
		if($.sidebar_linkstr.message.target=='_blank'){
			var newwindow=window.open('about:blank');
			newwindow.location.href=$.sidebar_linkstr.message.linkurl;
			return '';
		}
		location.href=$.sidebar_linkstr.message.linkurl;
	}
	return false;
})

$('.wpsidebar02 li.shelp img.hover').click(function () {
	console.log("",$.sidebar_linkstr,$.sidebar_linkstr.message.linkurl);
	if ($.sidebar_linkstr.help.linkurl) {
		if($.sidebar_linkstr.help.target=='_blank'){
			console.log("1111111111");
			var newwindow=window.open('about:blank');
			newwindow.location.href=$.sidebar_linkstr.help.linkurl;
			return '';
		}
		location.href=$.sidebar_linkstr.help.linkurl;
	}
	return false;
})

$('.wpsidebar02 li.sgotop img.hover').click(function () {
	if (!$("html,body").is(":animated")) {
		$('#scroll_container').animate({ scrollTop: 0 }, 500);
	}
	return false;
})
/////////////
})
