# 하노이의 탑 (사실 어려워서 찾아봄...)
# n번 원판을 옮기기 위해
# 1) n-1개의 원판을 보조 기둥으로 옮겨야함
# 2) n번 원판을 목표 기둥으로 옮김
# 3) 보조 기둥에 있는 n-1개의 원판을 목표 기둥으로 옮겨야함

n = int(input())

def hanoi(n, start, to, via):
    if n == 1:
        print(start, to)
        return
    else:
        hanoi(n-1, start, via, to)
        print(start, to)
        hanoi(n-1, via, to, start)
print(2**n - 1)
hanoi(n, "1", "3", "2")