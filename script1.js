function determinant() {
  var s11 = parseInt(document.querySelector('#s11').value);
  var s12 = parseInt(document.querySelector('#s12').value);
  var s13 = parseInt(document.querySelector('#s13').value);
  var s21 = parseInt(document.querySelector('#s21').value);
  var s22 = parseInt(document.querySelector('#s22').value);
  var s23 = parseInt(document.querySelector('#s23').value);
  var s31 = parseInt(document.querySelector('#s31').value);
  var s32 = parseInt(document.querySelector('#s32').value);
  var s33 = parseInt(document.querySelector('#s33').value);
  var sum = [s11, s12, s13, s21, s22, s23, s31, s32, s33];

  for (var i=0; i<9; i++){
    var result = (sum[0]*sum[4]*sum[8]+sum[1]*sum[5]*sum[6]+sum[2]*sum[3]*sum[7])-(sum[6]*sum[4]*sum[2]+sum[7]*sum[5]*sum[0]+sum[1]*sum[3]*sum[8]);
  }
  document.querySelector("#result").innerHTML = result;
}
document.querySelector('button').addEventListener('click', determinant);
