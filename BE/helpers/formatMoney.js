const isInvalidNumber = (val) => {
  if (isNaN(parseFloat(val))) return true;

  // 0 length
  if (!val.length) return true;

  // without digit, dot, minus
  for (let i = 0; i < val.length; i += 1) {
    if (!((val[i] >= '0' && val[i] <= '9') || val[i] === '-' || val[i] === '.'))
      return true;
  }

  // dot more than once
  let cnt = 0;
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] === '.')
      cnt += 1;
  }
  if (cnt > 1) return true;

  // minus more than once
  cnt = 0;
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] === '-')
      cnt += 1;
  }
  if (cnt > 1) return true;
  if (cnt === 1 && val[0] !== '-') return true;

  return false;
}

const formatWithDot = (val) => {
  let cnt = 0;
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] === '.')
      cnt += 1;
  }
  let ret = val;
  if (cnt === 0) ret += '.00';
  if (ret[0] === '.') ret = '0' + ret;
  return ret;
}

const roundUp = (val) => {
  let ind = -1;
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] === '.') {
      ind = i;
      break;
    }
  }
  
  if (ind === -1) return val;
  let ret = val + "00000";
  if (ret[ind+3] >= '5') {
    let now = ind + 2, flg = 0;
    while (now >= 0) {
      // console.log('TCL: roundUp -> now', now, ret[now]);
      if (ret[now] !== '.' && ret[now] !== '9') {
        ret = ret.slice(0, now) + String.fromCharCode(ret.charCodeAt(now) + 1) + ret.slice(now+1);
        flg = 1;
        break;
      }
      else if(ret[now] === '9') {
        ret = ret.slice(0, now) + "0" + ret.slice(now+1);
      }
      now -= 1;
    }
    if (flg === 0) {
      ret = "10" + ret.slice(1);
      ind += 1;
    }
  }
  return ret.slice(0, ind+3);
}

const formatWithSpace = (val) => {
  let ret = val;
  const minus = ret[0] === '-';
  if (minus) ret = ret.slice(1);
  for (let i = ret.length - 6; i > 0; i -= 3) {
    ret = ret.slice(0, i) + " " + ret.slice(i);
  }
  if (minus) ret = "-" + ret;
  return ret;
}

const isZero = (val) => {
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] !== '0' && val[i] !== '.' && val[i] !== '-' && val[i] !== ' ') {
      return false;
    }
  }
  return true;
}

const formatMoney = (val) => {
  if (isInvalidNumber(val)) return 'Invalid Number';

  let value = formatWithDot(val);
  // console.log('TCL: formatMoney1 -> value', value);
  value = roundUp(value);
  // console.log('TCL: formatMoney2 -> value', value);
  value = formatWithSpace(value);
  // console.log('TCL: formatMoney3 -> value', value);
  if (isZero(value)) value = "0.00";

  return value;
}

module.exports = {
  formatMoney: formatMoney
}