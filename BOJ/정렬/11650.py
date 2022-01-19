import sys

n = int(sys.stdin.readline())
a = []

for _ in range(n):
    a.append(tuple(map(int, sys.stdin.readline().split())))
    
a = sorted(a, key=lambda x: (x[0], x[1]))

for item in a:
    print(item[0], item[1])