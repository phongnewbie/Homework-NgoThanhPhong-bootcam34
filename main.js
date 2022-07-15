// document.getElementById("btnTinhLuong").onclick=function calSalary(){
//     // Đầu vào
//     var luongNgay = 100000; // const là khai báo biến của ES6
//     var soNgayLam = document.getElementById("soNgayLam").value;
//     console.log(luongNgay);
//     console.log(soNgayLam);

//     //Xử lý
//     var toTal = luongNgay * soNgayLam;
//     //Đầu ra
//     //Formart theo tiền
//     var formart = new Intl.NumberFormat("vn-VN");
//     // NumberFormart dùng để chuyển kiểu dữ liệu tiền về kiểu tiền của việt nam
//     var totalVND = formart.format(toTal) + "vnd";
//     console.log(totalVND); 
//     // console.log(toTal)
//     document.getElementById("thongBaoTinhLuong").innerHTML = totalVND; 
//     // tạo thêm
//     var createTag = document.createElement("p");

 //}
 function calcSalaries(){
   var oneDaySalary = 100000;
   var totalDay = document.getElementById("dayTowork").value;
   console.log(oneDaySalary);
   console.log(totalDay)
   var totalSalaries = oneDaySalary * totalDay;
   var formart = new Intl.NumberFormat("vn-VN");
   var  totalMoney = formart.format(totalSalaries) + "vnd"
   document.getElementById("thongBaoTinhLuong").innerHTML = `Tong so tien ban se nhan la : ${totalMoney}`;
   var notificationAlert = document.createElement("p");
 }
// function calcSalaries(){
//   var salariesOneDay = 100000;
//   var dayWorking = document.getElementById("dayTowork").value;
//   var totalSalaries = salariesOneDay * dayWorking;
//   var formart = new Intl.NumberFormat("vn-VN"); // Khai bao cach chuyen doi mot day so thanh tien viet nam
//   var totalMoney = formart.format(totalSalaries) +"vnd";
//   document.getElementById("thongBaoTinhLuong").innerHTML = totalMoney;
//   var notificationAlert = document.createElement("p");
// }
function totalInteger(){
  var numberInteger1 = document.getElementById("header1").value*1;
  var numberInteger3 = document.getElementById("header2").value*1;
  var numberInteger5 = document.getElementById("header3").value*1;
  var numberInteger7 = document.getElementById("header4").value*1;
  var numberInteger9 = document.getElementById("header5").value*1;
  var totalInterger = ((numberInteger1 + numberInteger3 + numberInteger5 + numberInteger7 + numberInteger9)/5);
  document.getElementById("result-Integer").innerHTML = `Trung bình cộng 5 số nguyên là : ${totalInterger}`
  var reSult = document.createElement("p"); 
}
function changeMoney(){
  var vndMoney = 23500;
  var usdMoney = document.getElementById("amounttoChange").value
  var totalMoney = vndMoney * usdMoney;
  var formart = new Intl.NumberFormat("vn-VN");
  var  totalMoney = formart.format(totalMoney) + "vnd"
  document.getElementById("moneyChange").innerHTML = `Tổng số tiền vnd bạn sẽ nhận được là : ${totalMoney}`
  var changeMoneyResult = document.createElement("p");
}
function areaPerimeter(){
  var lengthArea = document.getElementById("inputLength").value;
  var widthArea  = document.getElementById("inputWidth").value;
  var areaRectangle = lengthArea * widthArea;
  var perimeterRectangle = ((lengthArea*1)+ (widthArea*1))*2;
  document.getElementById("areaPerimeter").innerHTML = `Dien tich hinh chu nhat la ${areaRectangle}cm  </br> Chu vi hinh chữ nhật là : ${perimeterRectangle}cm`
  var perimeterrectangleResult = document.createElement("p");
}
function totlatwoNumber(){
  var numberOne = document.getElementById("numBerone").value;
  var numberTwo = numberOne % 10;
  var numberThree = Math.floor(numberOne/10);
  var totalPlusTwoNumber = numberTwo + numberThree;
  document.getElementById("resultTotalNumber").innerHTML = `Tong 2 ky so vua nhap la : ${totalPlusTwoNumber}` 
  var resultTotal = document.createElement("p");
}


























