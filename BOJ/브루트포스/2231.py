n = int(input())

for num in range(1, n+1):
    nsum = num
    for c in str(num):
        nsum += int(c)
        
    if nsum == n:
        print(num)
        break
    
    if num == n:
        print(0)
        break

