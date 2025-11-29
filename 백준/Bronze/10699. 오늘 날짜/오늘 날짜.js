// 풀이
function solution() {
  let date = new Date();
  let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  let korTime = new Date(utc + 9 * 60 * 60 * 1000);
  let year = korTime.getFullYear();
  let month = korTime.getMonth() + 1;
  let day = korTime.getDate();

  console.log(`${year}-${month}-${day}`);
}

solution();