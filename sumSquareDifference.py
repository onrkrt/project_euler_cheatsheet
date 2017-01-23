def sumSquareDifference(num):
    arr = range(1,num+1)
    _sumOfSquares = sumOfSquares(arr)
    _squareSum = squareSum(arr)
    return _squareSum - _sumOfSquares
def sumOfSquares(arr):
    sum = 0
    for i in arr:
        sum += i*i
    return sum
def squareSum(arr):
    res = sum(arr)
    return res*res

print(sumSquareDifference(100))

