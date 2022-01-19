n, m = map(int, input().split())
card = list(map(int, input().split()))
ans = 0

for i in range(n):
    for j in range(n):
        if card[i] == card[j]:
            continue
        for k in range(n):
            if card[i] == card[k] or card[j] == card[k]:
                continue
            if card[i] + card[j] + card[k] <= m:
                ans = max(ans, card[i] + card[j] + card[k])
                
print(ans)