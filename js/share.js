/////分享功能/////
$(".qq_share").click(function(){
	var p = {
		url:location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
		desc:'', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
		title:'', /*分享标题(可选)*/
		summary:'', /*分享摘要(可选)*/
		pics:'', /*分享图片(可选)*/
		flash: '', /*视频地址(可选)*/
		site:'', /*分享来源(可选) 如：QQ分享*/
		style:'201',
		width:32,
		height:32
	};
	var s = [];
	for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	};
	window.open("http://connect.qq.com/widget/shareqq/index.html?"+s.join('&'));
});
$(".qzone_share").click(function(){
	var p = {
		url:location.href,
		showcount:'1',/*是否显示分享总数,显示：'1'，不显示：'0' */
		desc:'',/*默认分享理由(可选)*/
		summary:'',/*分享摘要(可选)*/
		title:'',/*分享标题(可选)*/
		site:'',/*分享来源 如：腾讯网(可选)*/
		pics:'', /*分享图片的路径(可选)*/
		style:'201',
		width:113,
		height:39
	};
	var s = [];
	for(var i in p){
		s.push(i + '=' + encodeURIComponent(p[i]||''));
	};
	window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&'));
});
$(".sina_share").click(function(){
	title = '';
	window.open('http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + window.location.href);   
});