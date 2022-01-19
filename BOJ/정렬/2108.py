import sys
from collections import Counter

n = int(sys.stdin.readline())
a = []
for _ in range(n):
    a.append(int(sys.stdin.readline()))
    
a.sort()
temp = Counter(a).most_common()

print(round(sum(a)/n))
print(a[n//2])
if len(temp) > 1:
    if temp[0][1] == temp[1][1]:
        print(temp[1][0])
    else:
        print(temp[0][0])
else:
    print(temp[0][0])
print(a[-1]-a[0])
