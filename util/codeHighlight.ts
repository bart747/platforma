function highlightCode(snippet: string): string {
  const dimColor: string = "#808080";
  const highlightColor: string = "text-brand-orange";

  const formattedCode = snippet
    .replace(
      /[{}();<>]/g, // brackets, semicolons
      `<span style="color:${dimColor}">$&</span>`
    )
    .replace(
      /return |const |let |if(?=\s\{) |else(?=\s\{) |switch(?=\() /g, // major statements
      `<span class='${highlightColor}'>$&</span>`
    )
    .replace(
      /\=\<span class=\'\S*\'\>\>\<\/span\>/g, // arrow function symbol
      `<span class='${highlightColor}'>=></span>`
    )
    .replace(
      /(\/\/)[\s\S].*/g, // comments - JS style
      `<span style="color:${dimColor}">$&</span>`
    )
    .replace(
      /--|!--/g, // comments - HTML style
      `<span style="color:${dimColor}">$&</span>`
    )
    .replace(/\`\`\`/g, ""); // markdown code marker

  return `<pre><code> ${formattedCode} </code></pre>`;
}

export default highlightCode;
