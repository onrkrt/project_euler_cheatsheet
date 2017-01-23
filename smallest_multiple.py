def smallestMult(num):
    cond = True
    index = 2
    arr = []
    smult = 1
    for i in range(1,num+1):
        arr.append(i)
    while cond:
        count = 0
        flag = True
        for j in range(1,num):
            if arr[j]%index == 0:
                arr[j] = arr[j]/index
                if flag:
                    smult*=index
                    flag = False
                print(arr)
            else:
                count = count+1
                print(count)
        if count == len(arr)-1:
            index+=1
        if sum(arr) == num:
            cond = False
    print(smult)
smallestMult(20)

        
