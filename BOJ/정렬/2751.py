import sys

n = int(sys.stdin.readline())
a = []

for _ in range(n):
    a.append(int(sys.stdin.readline()))
    
a.sort()
for item in a:
    print(item)