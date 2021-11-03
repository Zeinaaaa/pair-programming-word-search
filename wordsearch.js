const transpose = matrix => matrix[0].map((r, i) => matrix.map(c => c[i]));
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let vertical = transpose(letters);
    const verticalJoin = vertical.map(x => x.join(''))
      if (horizontalJoin.includes(word)) {
          return true;
      } else if (verticalJoin.includes(word)) {
           return true;
      }else {
            return false;
      } 
    }

module.exports = wordSearch