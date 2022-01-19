import sys

n = int(sys.stdin.readline())
a = []
for _ in range(n):
    a.append(sys.stdin.readline().rstrip())
    
a = set(a)
a = sorted(a)
a = sorted(a, key=lambda x: len(x))

for item in a:
    print(item)