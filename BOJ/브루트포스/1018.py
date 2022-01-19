def check(c):
    wcount = 0
    bcount = 0
    
    # start with 'W'
    for i in range(8):
        for j in range(8):
            if i % 2 == 0:
                if j % 2 == 0 and c[i][j] == 'W': # W
                    wcount += 1
                elif j % 2 == 1 and c[i][j] == 'B': 
                    wcount += 1
            if i % 2 == 1:
                if j % 2 == 0 and c[i][j] == 'B':
                    wcount += 1
                elif j % 2 == 1 and c[i][j] == 'W':
                    wcount += 1
    wcount = 64 - wcount
    # start with 'B'
    for i in range(8):
        for j in range(8):
            if i % 2 == 0:
                if j % 2 == 0 and c[i][j] == 'B': # B
                    bcount += 1
                elif j % 2 == 1 and c[i][j] == 'W': 
                    bcount += 1
            if i % 2 == 1:
                if j % 2 == 0 and c[i][j] == 'W':
                    bcount += 1
                elif j % 2 == 1 and c[i][j] == 'B':
                    bcount += 1
    bcount = 64 - bcount
    
    return min(wcount, bcount)

n, m = map(int, input().split())
ans = 8*8
c = []
for _ in range(n):
    s = input()
    c.append(list(s))

for i in range(n-7):
    for j in range(m-7):
        ans = min(ans, check([row[j:j+8] for row in c[i:i+8]]))

print(ans)