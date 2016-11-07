window.onload=function(){
	// banner图开始
		var btns=document.getElementsByClassName("btn");
	var tups=document.getElementsByClassName("banner-tup");
	var banners=document.getElementsByClassName("banner-bj2")[0];
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onmouseover=function(){
			num=this.index;
			for (var i = 0; i < btns.length; i++) {
				tups[i].style.zIndex="1";
				btns[i].style.backgroundColor="#000";
			};
			tups[this.index].style.zIndex="2";
			btns[this.index].style.backgroundColor="#E5004F";
		}
	};
var lunbo1=setInterval(move,3000)
var num=0
function move(){
		num++;
	if (num==4) {
		num=0
	}
    for (var i = 0; i < btns.length; i++) {
    	tups[i].style.zIndex="1";
    	btns[i].style.backgroundColor="#000";
       };
        tups[num].style.zIndex="2";
        btns[num].style.backgroundColor="#E5004F";
 };
var banner_box=document.getElementsByClassName("banner-bj2")[0]
    banner_box.onmouseover=function(){
	clearInterval(lunbo1)
}
banner_box.onmouseout=function(){
	lunbo1=setInterval(move,3000)
}
//banner图结束

//选项卡开始

	var box=getClass("box");
	var leftbtn=getClass("leftbtn");
	var rightbtn=getClass("rightbtn");
	var circle=getClass("banner-btn");
	var content=getClass("content");
	for (var i = 0; i < leftbtn.length; i++) {
            lunbo2(box[i],leftbtn[i],rightbtn[i],circle[i],content[i])
       };
       function lunbo2(box,leftbtn,rightbtn,circle,content){
	var btn=$(".btnbox1");
	var flage=true;
	box.onmouseover=function(){
		animate(leftbtn,{left:0},200);
		animate(rightbtn,{right:0},200);
	}
	box.onmouseout=function(){
		animate(leftbtn,{left:-30},200);
		animate(rightbtn,{right:-30},200);
	}
	// 鼠标移入移出箭头变色
	leftbtn.onmouseover=function(){
		this.style.backgroundPosition="left bottom";
	}
	leftbtn.onmouseout=function(){
		this.style.backgroundPosition="left top";
	}
	rightbtn.onmouseover=function(){
		if (flage) {
        	flage=true
		this.style.backgroundPosition="right bottom";
	}
	}
	rightbtn.onmouseout=function(){
		this.style.backgroundPosition="right top";
	}
	rightbtn.onclick=moveright;
	leftbtn.onclick=moveleft;
	btn[0].onclick=moveleft;
	btn[1].onclick=moveright;
	function moveright(){
      animate(content,{marginLeft:-390})
      btn[0].style.backgroundColor="#ccc";
      btn[1].style.backgroundColor="red";
      flage=false
	}
	function moveleft(){
      animate(content,{marginLeft:0})
      btn[1].style.backgroundColor="#ccc";
      btn[0].style.backgroundColor="red";
      flage=true
	}
}
//选项卡结束

//节点线条滑动开始
		function border(obj,time){
			obj.style.position="relative";
			var div1=document.createElement("div");
			var div2=document.createElement("div");
			var div3=document.createElement("div");
			var div4=document.createElement("div");
			div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px"
			div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px"
			div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px"
			div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px"
			obj.appendChild(div1)
			obj.appendChild(div2)
			obj.appendChild(div3)
			obj.appendChild(div4)
			var width=parseInt(getStyle(obj,"width"))+2
			var height=parseInt(getStyle(obj,"height"))+2
			obj.onmouseover=function(){
				animate(div1,{width:width},time)
				animate(div2,{height:height},time)
				animate(div3,{width:width},time)
				animate(div4,{height:height},time)
			}
			obj.onmouseout=function(){
				animate(div1,{width,width:0},time)
				animate(div2,{height,height:0},time)
				animate(div3,{width,width:0},time)
				animate(div4,{height,height:0},time)
			}
		}
		var one=$(".one");
		var two=$(".two");
		var three=$(".three");
		var four=$(".four");
		// border(one,500)
		// border(two,500)
		// border(three,500)
		// border(four,500)
	for (var i = 0; i < one.length; i++) {
        border(one[i],300);
        
        
      };
      for (var i = 0; i < two.length; i++) {
        border(two[i],300);    
      };
      for (var i = 0; i < three.length; i++) {
        border(three[i],300);
      };
       for (var i = 0; i <four.length; i++) {
        border(four[i],300);
      };
//节点线条滑动结束

//侧导航遮罩开始


	var liutups=document.getElementsByClassName("ziconb");
	var masks=document.getElementsByClassName("mask");
	for (var i = 0; i <liutups.length; i++) {
		liutups[i].index=i;
	    liutups[i].onmouseover=function(){
			masks[this.index].style.opacity="0.8";
		}
		 liutups[i].onmouseout=function(){
			masks[this.index].style.opacity="0";
	};
}

//侧导航遮罩结束
// //滚动条开始
	    var floor=$(".floor")[0];
	    document.documentElement.scrollTop=1;
	    if (document.documentElement.scrollTop==1){
	    	var scrollobj=document.documentElement;
	    }else{
	    	var scrollobj=document.body;
	    }
	    var flag=true;flag2=true;
		function yy(){
			var st=scrollobj.scrollTop;
			if(st>650){
				if (flag){
					flag=false;flag2=true;
				animate(floor,{width:50,height:546})
			}
			}else{
				if (flag2) {
					flag=true;flag2=false;
					animate(floor,{width:0,height:0})
				
			}
			}
		}
		addEvent(window,'scroll',yy)
		var ziconb=$(".ziconb");
		var hengb1=$(".hengb1");
		for (var i = 0; i < ziconb.length; i++) {
			ziconb[i].index=i;
			ziconb[i].onclick=function(){
				var ot=hengb1[this.index].offsetTop;
				animate(scrollobj,{scrollTop:ot})
			}
		};
//滚动条结束

//返回顶部开始
var obj=document.documentElement;
		// var obj=document.body;
		var totop=$(".totop")[0];
		totop.onclick=function(){
			//火狐 谷歌的兼容性问题
			obj=document.body.scrollTop==0?document.documentElement:document.body;
			animate(obj,{scrollTop:0})
		}
// //返回顶部结束
//下拉菜单开始
        var lists=$(".liupei"); 
        var nav2s=$(".list");
		for (var i = 0; i < nav2s.length; i++) {
			var lis=$("li",nav2s[i]);
			var height=lis.length*200;
			nav2s[i].height=height;

		};
		for (var i = 0; i < lists.length; i++) {
			lists[i].index=i;
			hover(lists[i],function(){
				nav2s[this.index].style.display="block";
				animate(nav2s[this.index],{height:nav2s[this.index].height})
			},function(){
				nav2s[this.index].style.display="none";
				nav2s[this.index].style.height="0";
			})
		}
//下拉菜单结束
//超值特卖选项卡开始
 var btns1=document.getElementsByClassName("recommended-border");
     var text=document.getElementsByClassName("recommended-font");
     var biaoti1=document.getElementsByClassName("recommended-jiantou");
     var recommend=document.getElementsByClassName("recommended-left2-1");
   for (var i = 0; i < btns1.length; i++) {
	      btns1[i].index=i;
	      btns1[i].onmouseover=function(){
	      	for (var i = 0; i < btns1.length; i++) {
            recommend[i].style.display="none";
	      		btns1[i].style.borderColor="#333";
            biaoti1[i].style.display="none";
            text[i].style.fontWeight="400";
            text[i].style.color="rgb(102,102,102)";
            
	      	};
          recommend[this.index].style.display="block";
          this.style.borderColor="rgb(229,0,79)"
          biaoti1[this.index].style.display="block"
          text[this.index].style.fontWeight="700";
          text[this.index].style.color="#000";
          
	      }
      }

//超值特卖选项卡结束
//选项卡开始
 var scroller=$(".shi-l-tpbox");
      var left=$(".jiantou1");
      var right=$(".jiantou2");
      for (var i = 0; i < scroller.length; i++) {
        lunbo(scroller[i],left[i],right[i])
      }
      function lunbo(scroller,left,right){
      right.onclick=function(){
        animate(scroller,{marginLeft:-230},500,function(){
          var first=getFirst(this);
          this.appendChild(first);
          this.style.marginLeft=0;
        })
      }
        left.onclick=function(){
          var last=getLast(scroller);
          var first=getFirst(scroller);
          scroller.insertBefore(last,first);
          scroller.style.marginLeft="-230px";
          animate(scroller,{marginLeft:0},500)
        }
      }
//选项卡结束
var floors=$(".zzzz");
		var tops=[];
		//兼容性
		for (var i = 0; i < floors.length; i++) {
			tops.push(floors[i].offsetTop);   
			//文档流的高度
		}

		var doc=document.body;
		doc.scrollTop=1;
			if (doc.scrollTop!=1) {
				doc=document.documentElement;
			}

		var ch=document.documentElement.clientHeight;
		// alert(ch)     浏览器的高度
		// doc.scrollTop=41;
		function xx(){
			var scroll=doc.scrollTop;  //滚动条高度
			for (var i = 0; i < floors.length; i++) {
				if (scroll+ch>tops[i]&&floors[i].getAttribute("flag")!=true) {  
				//比较当前滚动条的高度与容器的高度。比较二者的高度
					var imgs=$('img',floors[i]);  
					for (var j = 0; j < imgs.length; j++) {
						imgs[j].src=imgs[j].getAttribute("asrc")
					

					};
				floors[i].setAttribute('flag',true)
				};
			};
		}
		addEvent(window,'scroll',xx)


//banner 右面放上去显示
		var banner=$(".menu");
         var ycla=$(".erjidh");
         for (var i = 0; i < banner.length; i++) {
          banner[i].index=i;
          hover(banner[i],function(){
          ycla[this.index].style.display="block";  
          },function(){
            ycla[this.index].style.display="none";
          })            
            
       };   
}
