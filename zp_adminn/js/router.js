$(function(){
	$('#nav').on({
	click:function(){
		// console.log($(this).text())
		if($(this).text()=='首页'){
	        $('#content').load('./pages/shouye.html');
			}
		if($(this).text()=='商家管理'){
	        $('#content').load('./pages/bussiness.html');
			}
		if($(this).text()=='招聘管理'){
	        $('#content').load('./pages/invite.html');
			}
		if($(this).text()=='用户管理'){
	        $('#content').load('./pages/user.html');
			}
		if($(this).text()=='模块管理'){
	        $('#content').load('./pages/mokuai.html');
			}
		if($(this).text()=='客服管理'){
	        $('#content').load('./pages/service.html');
			}
		if($(this).text()=='审核模块'){
	        $('#content').load('./pages/check.html');
			}
		if($(this).text()=='求职联系'){
	        $('#content').load('./pages/findjob.html');
			}
	}
	},'span')
	console.log(1)
	$('#nav').on('click','span',function(){
		console.log(2)
	})
	$('.cli1').trigger('click')
})
