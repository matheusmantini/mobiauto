export const highlightText = (text: string, query: string) => {
  const regex = new RegExp(`(${query})`, "gi");
  return text
    ?.split(regex)
    ?.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
};
