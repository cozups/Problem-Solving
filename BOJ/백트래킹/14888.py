import sys

n = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))
op = list(map(int, sys.stdin.readline().split()))
s = []
nmax = int(-1e9)
nmin = int(1e9)
def go():
    global nmax, nmin
    
    if sum(op) == 0:
        temp = num[0]
        k = 1
        for i in range(0, len(s)):
            if s[i] == 0:
                temp += num[k]
            elif s[i] == 1:
                temp -= num[k]
            elif s[i] == 2:
                temp *= num[k]
            elif s[i] == 3:
                if temp < 0:
                    temp *= -1
                    temp //= num[k]
                    temp *= -1
                else:
                    temp //= num[k]
            k += 1
        nmax = max(nmax, temp)
        nmin = min(nmin, temp)
        return
    
    for i in range(4):
        if op[i] > 0:
            s.append(i)
            op[i] -= 1
            go()
            op[i] += 1
            s.pop()
            
go()
print(nmax)
print(nmin)