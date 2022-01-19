# 최소 한개의 모음과 두개의 자음
import itertools

L, C = map(int, input().split())
ch = list(input().split())
a = ['a', 'e', 'i', 'o', 'u']

ch = sorted(ch)

nCr = list(itertools.combinations(ch, L))

for item in nCr:
    temp = ''
    for c in item:
        temp += c
    cnt = 0
    for c in temp:
        if c in a:
            cnt += 1
    if cnt >= 1 and len(temp)-cnt >= 2:
        print(temp)
