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
	else{

	var x=JSON.parse(localStorage.getItem('mydata')) || [];
		if (x.length==0)
			alert('vui long dang ki');
		
	for(var i=0;i<x.length;i++){
		var t=x[i].user;
		
		var y=x[i].passw;
		if(username===x[i].user && pass===x[i].passw){
			alert('thanh cong');
		document.getElementById('btndangnhap').style.display='none';
		document.getElementById('btndangki').style.display='none';
		document.getElementById('btndangxuat').style.display='block';
		document.getElementById('username').style.display='none';
		document.getElementById('pass').style.display='none';
			
		
		var btndangxuat=document.getElementById('btndangxuat');
			btndangxuat.onclick=function xoa(){
				inputUsername.value="";
				inputPass.value="";
				alert('Đã Đăng Xuất');
				btndangxuat.style.display='none';
				
				location.reload();
			}
		}
		else
			alert('that bai');
		
	}	
	}
		

}




let datas=[];
//const adddata=(ev)=>{
//	ev.preventDefault();
//	let data={
//		
//	 hoten:document.getElementById("hoten").value,
//	 sdt:document.getElementById("sdt").value,
//	 email:document.getElementById("email").value,
//	 user:document.getElementById("user").value,
//	 passw:document.getElementById("passw").value
//
//	}
//	
//	datas.push(data);
//	console.warn('added',{datas});
//	localStorage.setItem('mydata',JSON.stringify(datas));
//	
//}
function adddata(){
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
document.getElementById("dangki").addEventListener('click',function(){
	if(checkPhone() && validateemail() && validateform()){
		adddata();
		var data=JSON.parse(localStorage.getItem('mydata')) || [];
		alert('Đăng kí thành công \n tên đăng nhập của bạn:     '+ document.getElementById("user").value + '\n Số Điện Thoại:    ' + document.getElementById("sdt").value + '\n Email:    ' + document.getElementById("email").value  + '\n XIN CHÀO  ' + document.getElementById("hoten").value );
		location.reload();
	}
	
});
	
	
});

	
	

//-------------------------------------------

function validateform(){  
var name=document.getElementById("user").value;  
var password=document.getElementById("passw").value;  
  
if (name=="" || password==""){  
  alert("Không Được Để Trống");  
  return false;  
}else if(password.length<6){  
  alert("Mật Khẩu Phải  6 Kí Tự Trở Lên");  
  return false;  
  }  
	else return true;
} 

function matchpass(){  
var firstpassword=document.getElementById("passw").value;  
var secondpassword=document.getElementById("passw2").value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password Phải Giống Nhau!");  
return false;  
}  
	return true;
}  


function validateemail()  
{  
var x=document.getElementById("email").value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert('Lỗi Định Dạng Mail');  
  return false;  
  }
	else return true;
}  


 function checkPhone() {
        var phone = document.getElementById("sdt").value;
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
            if(phone.match(phoneNum)) {
                return true;
            }
            else {
                alert('vui long không nhập ký tự - SĐT:0xxxxxxxxxx')
            }
        }
btnmua.onclick = function checkmua() {

	var username = inputUsername.value;
	var pass = inputPass.value;
	if (username == "" || pass == "") {
		alert('Vui lòng đăng nhập')
	}
	else {
		var kh=JSON.parse(localStorage.getItem('mydatakh')) || [] ;
		var x = JSON.parse(localStorage.getItem('mydata')) || [];
		if (x.length == 0)
			alert('Vui lòng đăng kí');

		for (var i = 0; i < x.length; i++) {
			var t = x[i].user;
			var y = x[i].passw;
		
		
			
			if (username === x[i].user && pass === x[i].passw) {
				var r= confirm("Bạn chắc chắn mua chứ!");
				var r2=confirm('Thông tin bạn chọn mua:'+kh[i].sanpham+'Họ Tên   :' + x[i].hoten);
				if(r==true && r2==true)
				alert('Mua thành công');
			}
		}
	}
}
let datakh=[];
function adddatakh(){
	let datakhh={
		
	sanpham: document.getElementById("sanphamchitiet").innerHTML

	}
	
	datakh.push(datakhh);
	console.warn('added',{datakh});
	localStorage.setItem('mydatakh',JSON.stringify(datakh));
}


 
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById("btnmua").addEventListener('click',adddatakh);

});
var kh=JSON.parse(localStorage.getItem('mydatakh')) || [] ;
	var x = JSON.parse(localStorage.getItem('mydata')) || [];
let datakhmh=x.concat(kh);
function adddatakhmh(){
	
	
	
	console.warn('added',{datakhmh});
	localStorage.setItem('mydatakhmh',JSON.stringify(datakhmh));
}


 
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById("btnmua").addEventListener('click',adddatakhmh);

});













