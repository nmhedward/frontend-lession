// viet mot chuong trinh may tinh voi so a va so b duoc nhap vao cam tay voi 4 phep tinh: cong, tru, nhan, chia
// - Neu a hoac b khong co gia tri thi hien thi hien thi alert
// - In ket qua ra man hinh

function calcuSum() {
  numA = document.getElementById("inputNumA").value;
  numB = document.getElementById("inputNumB").value;
  document.getElementById('result').innerHTML = Math.round(numA + numB);
}

function calcuSubtract() {
  numA = document.getElementById("inputNumA").value;
  numB = document.getElementById("inputNumB").value;
  document.getElementById('result').innerHTML = numA - numB;
}

function calcuMulti() {
  numA = document.getElementById("inputNumA").value;
  numB = document.getElementById("inputNumB").value;
  document.getElementById('result').innerHTML = numA * numB;
}

function calcuDevide() {
  numA = document.getElementById("inputNumA").value;
  numB = document.getElementById("inputNumB").value;
  document.getElementById('result').innerHTML = numA / numB;
}