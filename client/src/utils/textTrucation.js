export const truncateText = (text, maxCharCount = 10) => {
  if (text.length <= maxCharCount) return text;
  return `${text.substring(0, maxCharCount)}...`;
};
