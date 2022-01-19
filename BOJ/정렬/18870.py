import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
b = set(a)
b = sorted(b)

dic = {b[i]: i for i in range(len(b))}
for item in a:
    print(dic[item], end=' ')