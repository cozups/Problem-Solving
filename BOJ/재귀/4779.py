def go(n):
    if n == 1:
        print('-', end='')
        return
    
    go(n//3)
    for _ in range(n//3):
        print(' ', end='')
    go(n//3)

# 파일의 끝에서 입력 종료
while True:
    try:
        n =int(input())
        go(3**n)
        print()
        
    except EOFError:
        break