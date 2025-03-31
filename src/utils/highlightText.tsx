export const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text
    ?.split(regex)
    ?.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        <span key={index}>{part}</span>
      )
    );
};
