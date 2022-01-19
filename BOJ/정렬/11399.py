import sys

n = int(sys.stdin.readline())
p = list(map(int, sys.stdin.readline().split()))
ans = 0

p.sort()
for i in range(n):
    ans += sum(p[:(i+1)])

print(ans)