/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // rec1, rec2가 겹치는 부분이 있는지 확인하는 문제
  // rec1이 rec2보다 완전히 왼쪽 - rec1의 오른쪽이 rec2 왼쪽보다 작음
  if (rec1[2] <= rec2[0]) return false;
  // rec1이 rec2보다 완전히 오른쪽 - rec1의 왼쪽이 rec2 오른쪽보다 큼
  if (rec1[0] >= rec2[2]) return false;
  // rec1이 rec2보다 완전히 윗쪽 - rec1의 아랫쪽이 rec2 윗쪽보다 큼
  if (rec1[1] >= rec2[3]) return false;
  // rec1이 rec2보다 완전히 아랫쪽 - rec1의 윗쪽이 rec2 아랫쪽보다 작음
  if (rec1[3] <= rec2[1]) return false;
  return true;
};