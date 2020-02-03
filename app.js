var display = document.getElementById('display');
var toRender = [];
var log = [];
let tempResult = 0;

document.getElementById('calculator').addEventListener('click',function(e){
  log.push(e.target.innerText);
  if(e.target.innerText==='='){
    
    if(toRender.join('').match(/[\/+x]{2,}/gm)!=null){
      let foo = toRender.join('').match(/[\/+x]{2,}/gm);
      console.log(foo);
      let bar = foo.join('');
      toRender = toRender.join('').replace(foo.join(''),bar[bar.length-1]).split('');
      display.innerText = toRender.join('');
    }
    
    toRender = toRender.join('').replace('x','*');
    tempResult = Math.floor(eval(toRender) * 100000) / 100000;
    display.innerText = tempResult;
    log.push(tempResult);
  } else if(e.target.innerText==='AC'){
    toRender = [];
    display.innerText = '0';
  } else if(e.target.innerText==='.' && toRender[toRender.length-1]==='.'){
    display.innerText = toRender.join('');
  } else if(e.target.innerText==='.'){
    toRender.push(e.target.innerText);
      if(toRender.join('').match(/\d*\.+\d*\.+\d*/gm)!=null){
        toRender.pop();
        display.innerText = toRender.join('');  
     }
    display.innerText = toRender.join('');  //
    console.log(toRender); //
  } else if(e.target.innerText==='0' && toRender[toRender.length-1]==='0'){
    display.innerText = toRender.join('');
  } else if(e.target.innerText.match(/[\/+x\-]/gm)!=null && log[log.length-3]==='='){
    toRender=[];
    toRender[0]=tempResult;
    toRender[1]=e.target.innerText;
    display.innerText = toRender.join('');  
  } else if(e.target.innerText.match(/[\/+x]/gm)!=null && toRender[toRender.length-1]==='-'){
      toRender.pop();
      toRender.push(e.target.innerText);
      display.innerText = toRender.join('');
  } else if(e.target.innerText.match(/[\/+x]/gm)!=null && toRender[toRender.length-1].match(/[\/+x]/gm)!=null){
    console.log("hum...");
    toRender.pop();
    toRender.push(e.target.innerText);
    display.innerText = toRender.join('');
  } else {
    toRender.push(e.target.innerText);         
    display.innerText = toRender.join('');  
    console.log("toRender : "+toRender.join(''));
    console.log("log : "+log.join(''))
  }
  
});

 