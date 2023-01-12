// function solution(new_id) {
//   var answer = '';

//   new_id = new_id.toLowerCase();
//   new_id = new_id.match(/[0-9a-z-_.]*/g).join('');
//   new_id = removeDots(new_id);
//   new_id = removeFirstLastDot(new_id);

//   if (new_id.length === 0) {
//     new_id = 'a';
//   }

//   if (new_id.length > 15) {
//     new_id = new_id.substr(0, 15);
//     new_id = removeFirstLastDot(new_id);
//   }

//   let last = new_id[new_id.length - 1];
//   while (new_id.length < 3) {
//     new_id += last;
//   }

//   answer = new_id;

//   return answer;
// }

// function removeDots(str) {
//   let prev = -Infinity;
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '.') {
//       if (i - prev === 1) {
//         prev = i;
//         continue;
//       }
//       prev = i;
//     }
//     result.push(str[i]);
//   }

//   return result.join('');
// }

// function removeFirstLastDot(str) {
//   if (str[0] === '.') {
//     str = str.substr(1, str.length - 1);
//   }
//   if (str[str.length - 1] === '.') {
//     str = str.substr(0, str.length - 1);
//   }

//   return str;
// }

// console.log(solution('abcdefghijklmn.p'));

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .substr(0, 15)
    .replace(/\.$/g, '');

  const last = answer[answer.length - 1];
  while (answer.length < 3) {
    answer += last;
  }
  answer;
}

solution('');
