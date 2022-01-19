n = int(input())
a = list(map(int, input().split()))

a = sorted(a)
s, e = 0, n-1
minVal = 2000000000
ans = [0, 0]

while s < e:
    tmp = a[s]+a[e]
    if abs(tmp) < abs(minVal):
        minVal = tmp
        ans[0], ans[1] = a[s], a[e]
        if tmp == 0:
            break
        
    if tmp < 0:
        s += 1
    elif tmp > 0:
        e -= 1
    
print(ans[0], ans[1])