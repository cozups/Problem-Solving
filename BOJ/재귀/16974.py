# L = 0 -> P 
# L = 1 -> B P P P B 
# L = 2 -> B BPPPB P BPPPB B 
# L(N) = B + L(N-1) + P + L(N-1) + B

def burger(n, x):
    if n == 0:
        if x == 0:
            return 0
        elif x == 1:
            return 1
    elif x == 1:
        return 0
    elif x <= 1 + b[n-1]:
        return burger(n-1, x-1)
    elif x == 1 + b[n-1] + 1:
        return p[n-1] + 1
    elif x <= 1 + b[n-1] + 1 + b[n-1]:
        return p[n-1] + 1 + burger(n-1, x - (1 + b[n-1] + 1))
    else:
        return p[n-1] + 1 + p[n-1]
    

n, x = map(int, input().split())
b = [1] * (n+1)
p = [1] * (n+1)

for i in range(1, n+1):
    b[i] = 1 + b[i-1] + 1 + b[i-1] + 1
    p[i] = p[i-1] + 1 + p[i-1]


ans = burger(n, x)

print(ans)