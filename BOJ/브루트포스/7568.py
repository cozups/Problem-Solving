n = int(input())
profile = [[] for _ in range(n)]
rank = [1] * n
for i in range(n):
    profile[i] = list(map(int, input().split()))
    
for i in range(n):
    for j in range(i+1, n):
        if profile[i][0] < profile[j][0] and profile[i][1] < profile[j][1]:
            rank[i] += 1
        elif profile[i][0] > profile[j][0] and profile[i][1] > profile[j][1]:
            rank[j] += 1
            
for item in rank:
    print(item, end = ' ')