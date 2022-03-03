# Problem-Solving

알고리즘 풀이 (스터디, 개인)

스터디하면서 푼 문제들과 개인적으로 따로 푸는 문제들의 solution 업로드

- BOJ
- Programmers
- Leetcode

# 알고리즘 문제 풀면서 알게된 것

## 자료구조

### HashSet.contains() vs ArrayList.contains() performance

- HashSet.contains()

  - O(1)
  - HashSet은 HashMap 인스턴스 기반인데, HashSet 내부의 map에 데이터를 저장하게 된다(일명 bucket).
  - 이 bucket은 각 해시 코드로 연결되어있다.
  - 즉, HashSet은 이 해시 코드를 찾아 바로 데이터에 접근할 수 있으므로 O(1)이다.
  - 충돌이 일어날 경우, bucket이 트리 구조이므로 O(logN)까지 늘어날 수 있다.

- ArrayList.contains()
  - O(n)
  - ArrayList는 indexOf()메소드를 사용한다.

**즉, contains() 메소드는 HashSet이 더 빠르다.**
