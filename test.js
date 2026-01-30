function sumMultiplesInM(f,m){
  let sum=0;
  for(let i=0;i<m.length;i++){
    for(let j=0;j<f.length;j++){
      if(Number(m[i])%Number(f[j])===0){
        sum=sum+Number(m[i]);
        break;
      }
    }
  }
  return sum;
}
function findSum(){
let f=document.getElementById("fArray").value.split(",");
let m=document.getElementById("mArray").value.split(",");
let result= sumMultiplesInM(f,m);
document.getElementById("output").innerText=result;
}
