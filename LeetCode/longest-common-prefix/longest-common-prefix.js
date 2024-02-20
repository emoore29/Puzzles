const longestCommonPrefix = function (strs) {
  if (strs.filter((str) => !str).length) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  } else {
    let matchStr = "";
    const firstStr = strs[0];
    let i = 0;
    while (i < firstStr.length) {
      const everyLetterMatches = strs.every((str) => {
        return str[i] === firstStr[i];
      });
      if (everyLetterMatches) {
        matchStr += firstStr[i];
        i++;
      } else {
        break;
      }
    }
    return matchStr;
  }
};
