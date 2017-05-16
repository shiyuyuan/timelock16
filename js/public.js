var win = $(window),
    nav_on = null;


//tab切换
function nTabs(thisObj,Num){
  if(thisObj.className == "active")return;
  var tabObj = thisObj.parentNode.id;
  var tabList = document.getElementById(tabObj).getElementsByTagName("li");
  for(i=0; i <tabList.length; i++)
  {
	if (i == Num)
	{
	 thisObj.className = "active"; 
		document.getElementById(tabObj+"_Content"+i).style.display = "block";
	}else{
	 tabList[i].className = "normal"; 
	 document.getElementById(tabObj+"_Content"+i).style.display = "none";
	}
  } 
} 

function closed () {
	document.getElementById('video').style.display='none';
	document.getElementById("videoctl").pause();
}