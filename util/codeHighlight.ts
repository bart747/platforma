function highlightCode(snippet: string): string {

  const dimColor: string = 'text-gray-500'
  const highlightColor: string = 'text-brand-maroon'

  return(
    snippet
      .replace(/[{}();]/g,
               `<span class='${dimColor}'}>$&</span>`)
      .replace(/return|const|let|=>/g,
               `<span class='${highlightColor}'>$&</span>`)
      .replace(/(\/\/)[\s\S].*/g,
               `<span class='${dimColor}'>$&</span>`)
  )
}

export default highlightCode
