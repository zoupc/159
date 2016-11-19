function getweichat(appId,timestamp,nonceStr,signature,title,desc,imgUrl){
	wx.config({
		debug: false,
	    appId: appId, 
	    timestamp: timestamp,
	    nonceStr: nonceStr,
	    signature: signature,
	    jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo', 'getLocation']
	});

	wx.ready(function () {
		//分给朋友圈
		wx.onMenuShareTimeline({
			title: title,
			link: '',
			imgUrl: imgUrl,
			success: function () { 
				//share();
			}
		});
		//分给朋友
		wx.onMenuShareAppMessage({
			title: title,
			desc: desc,
			link: '',
			imgUrl: imgUrl,
			type: '',
	    	dataUrl: '',
	    	success: function () { 
	    		//share();
	    	},
		});
	    //分享到QQ
	    wx.onMenuShareQQ({
	    	title: title,
	    	desc: desc,
			link: '',
			imgUrl: imgUrl ,
			success: function () { 
				//share();
			},
		});
	    //分享到腾讯微博
	    wx.onMenuShareWeibo({
	    	title: title, 
	        desc: desc,
	        link: '',
	        imgUrl: imgUrl,
	        success: function () { 
	        	//share();
	       	},
	    });
	}); 
	
	function share(){
		$.post("${ctx}/hp/wxso.do",
		function(result){
			//
		});
	}
}
function scanQRCode(appId,timestamp,nonceStr,signature){
	wx.config({
	    appId: appId, 
	    timestamp: timestamp,
	    nonceStr: nonceStr,
	    signature: signature,
	    jsApiList: ['checkJsApi','scanQRCode']
	});
	//微信扫一扫
	wx.ready(function () {
		wx.scanQRCode({
			needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
			scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
			success: function (res) {
				var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
			}
		});
	});
}

function getUserLocation(){
	 //获取用户当前地理位置
    wx.getLocation({
    	success: function (res) {
    		var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    		var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
    		var speed = res.speed; // 速度，以米/每秒计
    		var accuracy = res.accuracy; // 位置精度
    	},
    	cancel: function (res) {
    		alert('用户拒绝授权获取地理位置');
    	}
    });
}

/**
 * 根据版本获取用户地理位置
 */
function getVersionLocation(versionType){
	if(!!versionType){
		if(versionType == "1"){
			//安卓
			var addInfo = zjkaddress.getLocal();
			if(!!addInfo){
				var tmp = addInfo.split("|");
				
				var longitude = tmp[0];  // 经度，浮点数，范围为180 ~ -180。
				var latitude = tmp[1]; // 纬度，浮点数，范围为90 ~ -90
				var curAddress = tmp[2]; //当前物理位置
	    		
			}
			
		}else if(versionType == "2"){
			//ios
		}else{
			getUserLocation();
		}
	}
}
