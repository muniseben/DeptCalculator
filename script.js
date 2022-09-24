let dept = 650;
let blank = document.getElementById('blank');
let add = document.getElementById('add'); 
let clean = document.getElementById('clean');
let table = document.getElementById('table1');


add.onclick = function () {

    var date = new Date();
    let newDept = dept - blank.value;

    answer.innerHTML = newDept; 
    dept = newDept;

    let newRow = table.insertRow(table.rows.length)
   
    newRow.insertCell(0).innerHTML =  blank.value;
    newRow.insertCell(1).innerHTML = date.toDateString();

    blank.value = '';
    
};


blank.addEventListener('keypress',function (event) {  
  if (event.key === "Enter")
  {
      add.onclick();
  }
});


document.getElementById('clean').onclick = function () { 
  table.deleteRow(table.rows.length-1);
}


