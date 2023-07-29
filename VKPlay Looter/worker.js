/* setInterval(function(){ console.log("ChameL1oN"); }, 100); */
//setInterval(function(){document.querySelectorAll("[class*=PointActions_bonusIconWingle]").length>0&&(document.querySelectorAll("[class*=PointActions_bonusIconWingle]")[0].click(),console.log("NICE CLICK BRO!"))},1e4);
 
 setInterval(function () {

	if (document.querySelectorAll('[class*=PointActions_bonusIconWingle]').length > 0) {
		   console.log("NICE CLICK BRO!"); document.querySelectorAll('[class*=PointActions_bonusIconWingle]')[0].click();
	}
	if(document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_][class*=LikeButton_iconLiked_]").length == 0){
		if(document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_]").length > 0){
			document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_]")[0].click();
			console.log("LIKED");
		}
	}
}, 10000);
 
 
 
/* 

setInterval(function () {

	if (document.querySelectorAll('[class=PointActions_bonusIconWingle]').length > 0) {
		   console.log("NICE CLICK BRO!"); document.querySelectorAll('[class=PointActions_bonusIconWingle]')[0].click();
	}
	if(document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_][class*=LikeButton_iconLiked_]").length == 0){
		if(document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_]").length > 0){
			document.querySelectorAll("[class*=Icon_block_][class*=LikeButton_icon_]")[0].click();
			console.log("LIKED");
		}
	}
}, 10000);


	

 */  