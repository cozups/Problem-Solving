from itertools import combinations

def binary_Search(start, end, target, arr):
    while start < end:
        mid = (start + end) // 2
        if arr[mid] <= target:
            start = mid + 1
        else:
            end = mid
            
    return end

n, m = map(int, input().split())
a = list(map(int, input().split()))

#배열을 반으로 나누기
left = a[:n//2]
right = a[n//2:]
    
# 각 배열의 부분 합
leftsum = []
rightsum = []
for i in range(len(left)+1):
    temp = combinations(left, i)
    for item in temp:
        leftsum.append(sum(item))
        
for i in range(len(right)+1):
    temp = combinations(right, i)
    for item in temp:
        rightsum.append(sum(item))

# 오른쪽 배열 정렬하기
rightsum.sort()

# 이진 탐색으로 경우의 수 찾기
ans = 0
for item in leftsum:
    if m-item < 0:
        continue
    ans += binary_Search(0, len(rightsum), m-item, rightsum)

print(ans)