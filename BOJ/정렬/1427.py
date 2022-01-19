import sys

n = list(sys.stdin.readline().rstrip())
n.sort(reverse=True)

for c in n:
    print(c, end='')