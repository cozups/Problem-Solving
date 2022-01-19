n = int(input())
a = []
for _ in range(n):
    a.append(int(input()))
    
a.sort()

for item in a:
    print(item)