function isPalindrome(number){
	number = number.toString();
	var number2 = number.split("").reverse().join("");
	if(number == number2)
		return true;
	else
		return false; 
}

function largestPalindromeProduct(){
	var largestProduct = 999*999;
	for(i=largestProduct;i>10000;i--){
		if(isPalindrome(i)){
			for(j=999;j>99;j--){
				if(i%j == 0 && i/j<=999)
					return i;
			}
		}
			
	}
	
}
