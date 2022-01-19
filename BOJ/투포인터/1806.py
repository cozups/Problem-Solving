n, x = map(int, input().split())
a = list(map(int, input().split()))

s, e = 0, 0
ans = 100001
tmp = a[s]

while True:
    if tmp < x:
        e += 1
        if e == n:
            break
        tmp += a[e]
    else:
        ans = min(ans, e-s+1)
        tmp -= a[s]
        s += 1

if ans == 100001:
    ans = 0
    
print(ans)