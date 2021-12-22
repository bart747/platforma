function highlightCode(snippet: string): string {
  const dimColor: string = "text-gray-500";
  const highlightColor: string = "text-brand-maroon";

  return snippet
    .replace(
      /[{}();]/g, // brackets, semicolons
      `<span class='${dimColor}'}>$&</span>`
    )
    .replace(
      /return|const|let|if|else|switch|=>/g, // major statements
      `<span class='${highlightColor}'>$&</span>`
    )
    .replace(
      /(\/\/)[\s\S].*/g, // comments
      `<span class='${dimColor}'>$&</span>`
    );
}

export default highlightCode;
