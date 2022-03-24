function highlightCode(snippet: string): string {
  const baseColor: string = "text-amber-700";
  const dimColor: string = "text-gray-500";
  const highlightColor: string = "text-brand-maroon";

  const formattedCode = snippet
    .replace(
      /[{}();<>]/g, // brackets, semicolons
      `<span class='${dimColor}'>$&</span>`
    )
    .replace(
      / return | const | let | if(?=\s\{) | else(?=\s\{) | switch(?=\() /g, // major statements
      `<span class='${highlightColor}'>$&</span>`
    )
    .replace(
      /\=\<span class=\'\S*\'\>\>\<\/span\>/g, // arrow function symbol
      `<span class='${highlightColor}'>=></span>`
    )
    .replace(
      /(\/\/)[\s\S].*/g, // comments - JS style
      `<span class='${dimColor}'>$&</span>`
    )
    .replace(
      /--|!--/g, // comments - HTML style
      `<span class='${dimColor}'>$&</span>`
    )
    .replace(
      /\`\`\`/g,
      ''
    );
  
  
  return `<pre><code class='${baseColor}'> ${formattedCode} </code></pre>`
}

export default highlightCode;