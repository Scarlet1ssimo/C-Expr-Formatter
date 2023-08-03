function formatLongExpression(expression) {
  let formattedExpression = "";
  let indentLevel = 0;
  let indentSize = 4;
  let castLevel = 0;
  // insert newline and indent
  let insertNewline = () => {
    return "\n" + " ".repeat(indentLevel * indentSize);
  };
  // First create a boolean array the same length as the expression
  let isCast = new Array(expression.length).fill(false);
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      //Distinguish between function call and cast
      //Check if the previous character is a letter or number
      if (i == 0 || (i > 0 && !/[a-zA-Z0-9_]/.test(expression[i - 1]))) {
        isCast[i] = true;
        castLevel++;
      }
    } else if (expression[i] === ")") {
      if (castLevel > 0) {
        isCast[i] = true;
        castLevel--;
      }
    }
  }
  let isAFunctionParenthesis1 = (i) => {
    if (expression[i] === "(") return isCast[i] === false;
    return false;
  };
  let isAFunctionParenthesis2 = (i) => {
    if (expression[i] === ")") return isCast[i] === false;
    return false;
  };
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === " ") continue;
    if (isAFunctionParenthesis1(i)) {
      //look ahead to see if the expression is not complex, do not indent
      //A expression is not complex only if it has no comma and no nested call
      let isComplex = false;
      let j = i + 1;
      while (!isAFunctionParenthesis2(j) && j < expression.length) {
        if (expression[j] === ",") {
          isComplex = true;
          break;
        }
        if (isAFunctionParenthesis1(j)) {
          isComplex = true;
          break;
        }
        j++;
      }
      if (isComplex) {
        indentLevel++;
        formattedExpression += expression[i] + insertNewline();
      } else {
        castLevel++;
        formattedExpression += expression[i];
      }
    } else if (isAFunctionParenthesis2(i)) {
      if (castLevel > 0) {
        castLevel--;
        formattedExpression += expression[i];
      } else {
        formattedExpression += insertNewline() + expression[i];
        indentLevel--;
      }
    } else if (expression[i] === ",") {
      formattedExpression += expression[i] + insertNewline();
    } else {
      formattedExpression += expression[i];
    }
  }
  return formattedExpression;
}
