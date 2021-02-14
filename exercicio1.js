var numerosRandomicos = [];

setInterval(()=>{
  numerosRandomicos.push(Math.trunc(Math.random()*100));
  console.log(numerosRandomicos);
}, 5000);