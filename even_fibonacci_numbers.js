function fib(biggest_number){
	var first = 1;
	var second = 1;
	var temp = 0;
	var sum_evens = 0;
	while(temp<=biggest_number){
		temp = first + second;
		first = second;
		second = temp;
		if(temp%2 == 0)
			sum += temp;
	}
	return sum;
}
