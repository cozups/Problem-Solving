n = int(input())
num = 666
count = 0

while True:
    temp = str(num)
    
    if temp.find('666') != -1:
        count += 1
        
    if count == n:
        break
    
    num += 1
    
print(num)