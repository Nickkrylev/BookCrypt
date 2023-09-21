

function codeText(action){
    let textVal = document.getElementsByClassName("text")[0].value;
    let key = [] ;
  
    let resultText = document.getElementsByClassName("result")[0];
    var select = document.getElementById('crypt_method');
    var value = select.options[select.selectedIndex].value;
    console.log(value);

    if(value == 1){

      key.push(document.getElementsByClassName("key")[0].value) ;
      key.push(document.getElementsByClassName("key")[1].value) ;
      console.log(key);
      resultText.innerHTML = trithemiusCodeLine(textVal,key,action);
    } else if (value == 2){
      key.push(document.getElementsByClassName("key")[0].value) ;
      key.push(document.getElementsByClassName("key")[1].value) ;
      key.push(document.getElementsByClassName("key")[2].value) ;
      console.log(key);
      resultText.innerHTML = trithemiusCodeNoLine(textVal,key,action);
    } else{
      let slog = slogan.value;
      resultText.innerHTML = trithemiusSlogan(textVal,slog,action);
    }
    
  };

  function trithemiusCodeNoLine(message,key,action){
    const messageArray = message.split("").map( char => char.charCodeAt(0));
    console.log(messageArray);
    console.log(key);
    const [a,b,c] = key; 
    let  resultText ='';
    const result = messageArray.forEach((char,index) => {
      let shift = Number(a)*Math.sqrt(index) + Number(b)*index + Number(c); 
      shift = Number(a) + Number(b) + Number(c);
      console.log(shift);
      if(action){
        char += shift ;
     
   } else{
       char -= shift ;
     
       
   }
   resultText += String.fromCharCode(char);
   console.log(resultText);
    });
    console.log(resultText);
    return resultText;
    
  }
  function trithemiusCodeLine(message,key,action){
    const messageArray = message.split("").map( char => char.charCodeAt(0));
  
    const [a,b] = key; 
    let  resultText ='';
    const result = messageArray.forEach((char,index) => {
      let shift = Number(a)*index + Number(b); 
       shift = Number(a) + Number(b) ;
      console.log(shift);
      if(action){
        char += shift ;
     
   } else{
       char -= shift ;
     
       
   }
   resultText += String.fromCharCode(char);
   console.log(resultText);
    });
    console.log(resultText);
    return resultText;
    
  }
 function trithemiusSlogan(message,slogan,action){
    const messageArray = message.split('').map(char => char.codePointAt(0));
    const keyArray = slogan.split('').map(char => char.codePointAt(0));
    const keyLength = keyArray.length;
    const resultArray = messageArray.map((charcode, index) =>{
        const shift = keyArray[index % keyLength];
        const newInt = (action === true) ? charcode + shift : charcode - shift;
        return newInt <0 ? newInt + 10000 : newInt % 10000;
    });
    const result = resultArray.map(int => String.fromCharCode(int)).join('');
    console.log(result);
    return result;
 }

function iconClick(){
  alert("ТР-12 Крилєв Микита Лаболаторна робота 2");
 
}
function openFile(input) {
  let textVal = document.getElementsByClassName("text")[0];
  let key = document.getElementsByClassName("key")[0] ;
  let result = document.getElementsByClassName("result")[0];
  let file = input.files[0];
  let text = '';
  let reader = new FileReader()
  reader.onload = function(){
  text = reader.result;
      console.log(text);
      textVal.value  = text;
      key.value ="";
      result.textContent = "";
      
  }
  reader.onerror = function () {
      console.log('error');
  }
  reader.readAsText(file);
} 

function onDownloadBtnClick() {
  let result = document.getElementsByClassName("result")[0].textContent;
  console.log(result)
  let blob = new Blob([result], { type: 'text/plain' });
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function encryption(state) {
  let textVal = document.getElementsByClassName("text")[0].value;
  let key = +document.getElementsByClassName("key")[0].value ;
  let result = document.getElementsByClassName("result")[0];
  result.textContent = "Example";
      console.log(textVal);
      const arrayText = textVal.split("");

      let textEncryp = "";


      arrayText.forEach(element => {
          console.log(element);
          let uCode = element.charCodeAt(0);
          
          if(state){
               uCode += key ;
            
          } else{
              uCode -= key ;
            
              
          }
          textEncryp += String.fromCharCode(uCode);

      });
      console.log(textEncryp);
      result.innerHTML = textEncryp;
      

  }