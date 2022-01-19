import sys

n, m = map(int, sys.stdin.readline().split())
s = []

def go():
    if len(s) == m:
        # s 리스트 안에 있는 내용을 출력
        print(' '.join(map(str, s)))
        return
    
    for i in range(1, n+1):
        s.append(i)
        go()
        s.pop()

go()