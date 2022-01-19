n = int(input())
s = list(input())

p1, p2 = 0, 1
ans = 1
dic = {s[p1]:1}

while p1 < len(s) and p2 < len(s):
    if s[p2] not in dic:
        dic[s[p2]] = 1
    else:
        dic[s[p2]] += 1
    
    # 인식된 알파벳 개수가 n개 보다 많을 때, 개수를 맞추기 위해 알파벳을 빼야한다.    
    if len(dic) > n:
        while p1 <= p2 and len(dic) > n:
            if dic[s[p1]] == 1:
                dic.pop(s[p1])
            else:
                dic[s[p1]] -= 1
            p1 += 1
            
    else:
        # 최대 길이 갱신
        ans = max(ans, p2-p1+1)
    
    p2 += 1

print(ans)