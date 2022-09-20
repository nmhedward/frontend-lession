// viet mot chuong trinh may tinh voi so a va so b duoc nhap vao cam tay voi 4 phep tinh: cong, tru, nhan, chia
// - Neu a hoac b khong co gia tri thi hien thi hien thi alert
// - In ket qua ra man hinh

const elementNumA = document.getElementById(inputNumA).value;
const elementNumB = document.getElementById(inputNumB).value;
const calculatePlus = elementNumA + elementNumB;
const calculateMinus = elementNumA - elementNumB;
const calculateMulti = elementNumA * elementNumB;
const calculateDivise = elementNumA / elementNumB;

function calculatePlus() {
  document.getElementById(result).innerHTML = calculatePlus;
}