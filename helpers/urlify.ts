export const urlify = (text: string) => {
  const urlRegex = /\!\[[\w|\s|\-]+\]\((https?:\/\/[^\s]+)\)/g;

  return text.replace(urlRegex, function (textMatched) {
    const text = textMatched.slice(2, textMatched.length - 1);
    const [title, url] = text.split("](");
    return `<a href="${url}" title="${title}" target="_blank" rel="noopener noreferrer">${title}</a>`;
  });
};
