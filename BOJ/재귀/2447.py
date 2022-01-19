def star(n):
    if n == 3:                                      # ***
        draw[0] = draw[2] = ['*','*','*']           # * *
        draw[1] = ['*',' ','*']                     # ***
        return
    
    star(n//3)
    for i in range(3):
        for j in range(3):
            if i == 1 and j == 1:
                continue
            else:
                for k in range(n//3):
                    draw[(n//3)*i+k][(n//3)*j:(n//3)*(j+1)] = draw[k][:(n//3)]
    
n = int(input())

draw = [[' ' for i in range(n)] for i in range(n)]
star(n)

for i in range(n):
    for j in range(n):
        print(draw[i][j], end='')
    print()