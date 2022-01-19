import sys

n = int(sys.stdin.readline())
a = []
for _ in range(n):
    a.append(tuple(sys.stdin.readline().rstrip().split()))

a = sorted(a, key=lambda x: int(x[0]))

for item in a:
    print(item[0], item[1])