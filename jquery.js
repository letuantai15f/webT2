// JavaScript Document

var inputUsername=document.getElementById("username");
var inputPass=document.getElementById("pass");
var btndangnhap=document.getElementById("btndangnhap");
btndangnhap.onclick = function checkdangnhap()

{
	
	var username=inputUsername.value;
	var pass=inputPass.value;
	if(username=="" ||pass=="")
		{
			alert('vui long nhap day du')
		}

	var x=JSON.parse(localStorage.getItem('mydata')) || [];
		if (x.length==0)
			alert('vui long dang ki');
	for(var i=0;i<x.length;i++){
		var t=x[i].user;
		
		var y=x[i].passw;
		if(username===x[i].user && pass===x[i].passw)
			alert('thanh cong');
		else
			alert('that bai');
		
	}	

}




let datas=[];
const adddata=(ev)=>{
	ev.preventDefault();
	let data={
	hoten:document.getElementById("hoten").value,
	 sdt:document.getElementById("sdt").value,
	 email:document.getElementById("email").value,
	 user:document.getElementById("user").value,
	 passw:document.getElementById("passw").value

	}
	datas.push(data);
	console.warn('added',{datas});
	localStorage.setItem('mydata',JSON.stringify(datas));
}
document.addEventListener('DOMContentLoaded',()=>{
	document.getElementById('dangki').addEventListener('click',adddata);
});










