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

var row=1;
var iphoten=document.getElementById("hoten");
	var ipsdt=document.getElementById("sdt");
	var ipemail=document.getElementById("email");
	var ipuser=document.getElementById("user");
	var ippassw=document.getElementById("passw");
var dangki =document.getElementById("dangki");
dangki.onclick=function displaydetail()
{
	var hoten=iphoten.value;
	var sdt=ipsdt.value;
	var email=ipemail.value;
	var user=ipuser.value;
	var passw=ippassw.value;
	if(!hoten||!sdt || !email || !user || ! passw){
			alert('Vui lòng nhập đủ thông tin');
	return;
	}
	var display=document.getElementById("display");
	var newrow=display.insertRow(row);
	var cell1=newrow.insertCell(0);
	var cell2=newrow.insertCell(1);
	var cell3=newrow.insertCell(2);
	var cell4=newrow.insertCell(3);
	var cell5=newrow.insertCell(4);
	cell1.innerHTML=hoten;
	cell2.innerHTML=sdt;
	cell3.innerHTML=email;
	cell4.innerHTML=user;
	cell5.innerHTML=passw;
	row++;
	
}