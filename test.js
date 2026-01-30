function sumMultiplesInM(f,m){
  let sum=0;
  for(let i=0;i<m.length;i++){
    for(let j=0;j<f.length;J++){
      if(m[i]%f[j]===0){
        sum=sum+m[i];
        break;
      }
    }
  }
  return sum;
}
let f=[3,5]
let m=[1,2,3,4,5,6,7,8,9]
let result= sumMultiplesInM(f,m);
console.log(result);
