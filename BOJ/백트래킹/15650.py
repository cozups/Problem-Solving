import sys

n, m = map(int, sys.stdin.readline().split())
s = []

def go(start):
    if len(s) == m:
        # s 리스트 안에 있는 내용을 출력
        print(' '.join(map(str, s)))
        return
    
    for i in range(start, n+1):
        if i not in s:
            s.append(i)
            go(i+1)
            s.pop()

go(1)