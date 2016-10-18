/*
  *
 ***
*****
 ***
  *

*/

const createLine = function(char, num) {
  let line = '';
  for(let i = 1; i <= num; i++) {
    line = line + char;
  }
  return line;
}

const diamond = function(lines) {
  if(lines % 2 == 0) lines++;

  let line = 1;
  let half = parseInt(lines / 2) + 1;
  let space = half - 1;

  for(; line <= half; line++, space--) {
    console.log(createLine(' ', space) + createLine('*', line * 2 - 1));
  }

  for(line -= 2, space += 2; line >= 1; line--, space++) {
    console.log(createLine(' ', space) + createLine('*', line * 2 - 1));
  }

}

diamond(5);
