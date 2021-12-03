function highlightCode(snippet: string): string {
  return(
    snippet
      .replace(/[{}();]/g, "<span style='color:#665'>$&</span>")
      .replace(/return|const|let|=>/g, "<span style='color:#832'>$&</span>")
      .replace(/(\/\/)[\s\S].*/g, "<span style='color:#665'>$&</span>")
  )
}

export default highlightCode
