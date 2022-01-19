import sys

n = int(sys.stdin.readline())
a = []
    
for i in range(n):
    a.append(sys.stdin.readline().rstrip().split())
    a[i][1] = int(a[i][1]); a[i][2] = int(a[i][2]); a[i][3] = int(a[i][3]);
    
a = sorted(a, key=lambda x: (-x[1],x[2],-x[3],x[0]))

for item in a:
    print(item[0])