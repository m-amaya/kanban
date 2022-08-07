const parseNumber = (text: string) => {
  const num = text.match(/\d/g)?.join("");

  return parseInt(num || "");
};

export default parseNumber;
