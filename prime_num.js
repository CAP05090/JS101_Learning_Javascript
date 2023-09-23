// check number is prime or not

let n = 35;
let cnt = 0
for (let i=1;i<=n;i++){
	if (n % i ==0){
		cnt++
	}
}
if(cnt==2){
	console.log("Prime number")
}
else{
	console.log("Not Prime number")
}