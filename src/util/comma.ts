export function setComma(n: string) {
  var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
  n += ''; // 숫자를 문자열로 변환
  while (reg.test(n)) {
    n = n.replace(reg, '$1' + ',' + '$2');
  }
  return n;
}
