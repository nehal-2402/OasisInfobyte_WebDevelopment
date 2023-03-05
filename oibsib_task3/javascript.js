const pri = document.getElementById('ans');
const fun = () => {
     const number = document.getElementById('inp').value;
     const op1=document.getElementById('select').value;
     if(op1==1){
          const res = (number * (9 / 5) + 32).toFixed(2);
          pri.innerHTML=`Loading...please wait`;
          setTimeout(() => {
               pri.innerHTML = `${res} °F`;
          }, 1000);
     }else{
          const res=((number-32)*5/9).toFixed(2);
          pri.innerHTML=`Loading...please wait`;
          setTimeout(() => {
               pri.innerHTML=`${res} °C`;
          }, 1000);
     }
}
inp.addEventListener('click',()=>{
     pri.innerHTML='';
     inp.value='';
})
