n, m = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

ap, bp = 0, 0

while True:
    if a[ap] < b[bp]:
        print(a[ap], end = ' ')
        ap += 1
    else:
        print(b[bp], end = ' ')
        bp += 1
    if ap == len(a) or bp == len(b):
        break
    
if ap == len(a):
    for i in range(bp, len(b)):
        print(b[i], end = ' ')
else:
    for i in range(ap, len(a)):
        print(a[i], end = ' ')