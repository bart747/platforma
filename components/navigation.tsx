import Link from 'next/link'

function navigation () {
  const symbol: string = `
    f(<svg xmlns="http://www.w3.org/2000/svg"
      width="18" height="18"
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
      class="inline feather feather-home">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>)
  `

  return (
    <nav>
      <Link href="/">
        <a>
          <div className="font-mono" dangerouslySetInnerHTML={{__html: symbol}}></div>
        </a>
      </Link>
    </nav>

  )
}

export default navigation
