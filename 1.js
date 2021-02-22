console.log("AJAX Tutarial Javascript");
let fetchBtn = document.getElementById('fetchbtn');

fetchBtn.addEventListener('click', buttonClickHandler)

let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', popHandler)

function popHandler(){
    console.log('You have clicked the Pop Handler');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    // xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    // xhr.getResponseHeader('contenent-type','application/json')

    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onreadystatechange=function(){
        console.log('ready state is',xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj.data);
            alert(obj.data.length);
            let list=document.getElementById('list');
            str="";
            for (key in obj.data){
                str+='<li>'+ obj.data[key].employee_name+ '</li>';
            }
            list.innerHTML=str;
        }
        else{
            console.error('some error occurred');
        }
    }
    // params='{"name":"test","salary":"123","age":"23"}';
    // xhr.send(params);
    xhr.send();
    console.log('we are done fetching employees');
}

function buttonClickHandler(){
    console.log('You have clicked the button fetchbtn');
    const xhr = new XMLHttpRequest();
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('contenent-type','application/json')

    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onreadystatechange=function(){
        console.log('ready state is',xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.error('some error occurred');
        }
    }
    params='{"name":"test","salary":"123","age":"23"}';
    xhr.send(params);
    // xhr.send();
    console.log('we are done');
}