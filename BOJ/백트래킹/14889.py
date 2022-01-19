import sys

n = int(sys.stdin.readline())
a = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
team1 = []

ans = int(1e9)
def go(start):
    global ans
    if len(team1) == n//2:
        team2 = []
        for i in range(0, n):
            if i not in team1:
                team2.append(i)
                
        sTeam = lTeam = 0
        for i in range(n//2):
            for j in range(n//2):
                if i == j: continue
                sTeam += a[team1[i]][team1[j]]
                lTeam += a[team2[i]][team2[j]]
                
        ans = min(ans, abs(sTeam-lTeam))
        return
    
    for i in range(start, n):
        if i not in team1:
            team1.append(i)
            go(i+1)
            team1.pop()
            
go(0)
print(ans)