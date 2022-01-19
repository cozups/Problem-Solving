n = int(input())
a = []

# 에라토스테네스의 체
p = [0, 0] + [1] * (n-1)
for i in range(2, n+1):
    if p[i]:
        a.append(i)
        for j in range(i*2, n+1, i):
            p[j] = 0

s, e = 0, 0
ans = 0
while e <= len(a):
    tmp = sum(a[s:e])
    if tmp == n:
        ans += 1
        e += 1
    elif tmp > n:
        s += 1
    elif tmp < n:
        e += 1
        
print(ans)