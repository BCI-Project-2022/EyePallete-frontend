function circle1color(value) {
  document.querySelector('.circle-part-1').style.backgroundColor = value;
  document.querySelector('.draw-circle-wrapper').style.transform = rotate(45);
}

function circle2color(value) {
  document.querySelector('.circle-part-2').style.backgroundColor = value;
  document.querySelector('.draw-circle-wrapper').style.transform = rotate(45);
}

function circle3color(value) {
  document.querySelector('.circle-part-3').style.backgroundColor = value;
  document.querySelector('.draw-circle-wrapper').style.transform = rotate(45);
}

function circle4color(value) {
  document.querySelector('.circle-part-4').style.backgroundColor = value;
  document.querySelector('.draw-circle-wrapper').style.transform = rotate(45);
}

function excelExport(event) {
  //   setInterval(() => {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function () {
    var fileData = reader.result;
    var wb = XLSX.read(fileData, { type: 'binary' });
    wb.SheetNames.forEach(function (sheetName) {
      var rowObj = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[sheetName]));
      console.log(rowObj);
    });
  };
  reader.readAsBinaryString(input.files[0]);
  //   }, 100000);
}
