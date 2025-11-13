function solution(genres, plays) {
  var answer = [];
  let genreCount = {};
  let songs = {};
  // 장르별 재생수 카운트
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const played = plays[i];
    if (genreCount[genre] && songs[genre]) {
      genreCount[genre] += played;
      songs[genre].push(i);
    } else {
      genreCount[genre] = played;
      songs[genre] = [i];
    }
  }

  const sorted = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
  for (let [genre, _count] of sorted) {
    const temp = songs[genre].sort((a, b) => (plays[b] - plays[a] === 0 ? a - b : plays[b] - plays[a])).slice(0, 2);
    answer.push(...temp);
  }

  return answer;
}