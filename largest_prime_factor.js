function largestPrimeFactor(num){
	var factor = 2;
	var factorArr = [];
	while(num>1){
		if(num%factor == 0){
			num = Math.floor(num/factor);
			factorArr.push(factor);
		}
		else
			factor++;
	}
	return factorArr[factorArr.length-1];
}
