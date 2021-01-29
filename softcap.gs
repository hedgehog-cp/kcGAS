/**
 * 艦これの火力キャップ処理をします。ただし、小数点以下を切り捨てずに返します。
 * @param {'cap'} cap 火力キャップ値を入力します。
 * @param {'fp'} fp キャップ処理される火力を入力します。
 * @customfunction
 */
function softcap(cap, fp) {
  const row = fp.length;
  const col = fp[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (fp[i][j] > cap) fp[i][j] = Math.sqrt(fp[i][j] - cap) + cap;
    }
  }
  return fp;
}
