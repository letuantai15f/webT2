// JavaScript Document
var inputUsername=document.getElementById("username");
var inputPass=document.getElementById("pass");
var btndangnhap=document.getElementById("btndangnhap");
btndangnhap.onclick = function checkdangnhap()

{
	var username=inputUsername.value;
	var pass=inputPass.value;

	if(username=='admin' && pass=='admin')
		alert('dang nhap thanh cong');
	else
		alert('khong thanh cong');

}