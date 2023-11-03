document.getElementById("result1").onclick = function () {
  var input1 = document.getElementById("input1_1").value;
  var input2 = document.getElementById("input1_2").value;
  console.log(Number(input1) * Number(input2));

  document.querySelector(".r1").innerHTML =
    Number(input1) * Number(input2) + " $";
};

document.getElementById("result2").onclick = function () {
  var i1 = document.getElementById("input2_1").value;
  i1 = Number(i1);
  var i2 = document.getElementById("input2_2").value;
  i2 = Number(i2);

  var i3 = document.getElementById("input2_3").value;
  i3 = Number(i3);
  var i4 = document.getElementById("input2_4").value;
  i4 = Number(i4);

  var i5 = document.getElementById("input2_5").value;
  i5 = Number(i5);
  var sum = i1 + i2 + i3 + i4 + i5;
  document.querySelector(".r2").innerHTML = " " + sum;
};

document.getElementById("result3").onclick = function () {
  var input = document.getElementById("input3").value;
  input = Number(input) * 23500;
  var result = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(input);
  document.querySelector(".r3").innerHTML = " " + result;
};

document.getElementById("result4").onclick = function () {
  var i1 = document.getElementById("input4_1").value;
  var i2 = document.getElementById("input4_2").value;
  var peri = (Number(i1) + Number(i2)) * 2;
  var area = Number(i1) * Number(i2);
  document.querySelector(".r4").innerHTML =
    "Chu vi là: " + peri + ". Diện tích là: " + area;
};

document.getElementById("result5").onclick = function () {
  var input = document.getElementById("input5").value;
  input = Number(input);

  var a = parseInt(input / 10);
  var b = input % 10;
  document.querySelector(".flag").classList.remove("d-flex");
  document.querySelector(".r5").innerHTML = a + b;
};
