n = int(input())
a = list(map(int, input().split()))
x = int(input())
cnt = 0

s = 0
e = n-1

# 정렬을 해야한다.
a = sorted(a)

while s < e:
    tmp = a[s] + a[e]
    
    if tmp == x:
        cnt += 1
    
    if tmp < x:
        s += 1
        continue
    e -= 1
            
print(cnt)