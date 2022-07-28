
var selectrow=null;
function onformsubmit(){
    // alert("hello world");
    let obj=access();
    insertnewrecord(obj);
    reset()
   
}

function access(){
    let obj={};
    obj["firstname"]=document.getElementById("name").value;
    obj["rollno"]=document.getElementById("rollno").value;
    obj["subject"]=document.getElementById("subject").value;
    // alert(obj.firstname);
    return obj;
}

function insertnewrecord(data){
    var table=document.getElementById("employlist").getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    var cell1=newrow.insertCell(0);
    cell1.innerHTML=data.firstname;

    var cell2=newrow.insertCell(1);
    cell2.innerHTML=data.rollno;

    var cell3=newrow.insertCell(2);
    cell3.innerHTML=data.subject;

    var cell4=newrow.insertCell(3);
    cell4.innerHTML=`<button class="lin" onclick="onedit(this)"><a href="#" >edit</a></button>  <button class="lin" onclick="ondelete(this)"><a href="#" >delete</a></button>` ;

}

function reset(){
    document.getElementById("name").value=" ";
    document.getElementById("rollno").value="" ;
    document.getElementById("subject").value="";
}

function onedit(td){
 selectrow=td.parentElement.parentElement;
 document.getElementById("name").value=selectrow.cells[0].innerHTML;
 document.getElementById("rollno").value=selectrow.cells[1].innerHTML ;
 document.getElementById("subject").value=selectrow.cells[2].innerHTML;
}

function ondelete(td){
del=td.parentElement.parentElement;
document.getElementById("employlist").deleteRow(del.rowIndex);
}


function upda(){
    var up=access();
    upd(up);
}

function upd(data){
    selectrow.cells[0].innerHTML=data.firstname;
    selectrow.cells[1].innerHTML=data.rollno;
    selectrow.cells[2].innerHTML=data.subject;

}