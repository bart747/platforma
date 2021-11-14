import styles from './header.module.css'

function HeaderHome () {
  return (
    <header className="bg-image-trees bg-cover rounded-full w-64 h-64 mx-auto blur-lg">
      <div className="rounded-full w-64 h-64">
        <h1 className="font-bold text-red-500 text-center text-3xl m-0 py-28">I∴X</h1>
      </div>
    </header>
  )
}
/*
  return (
    <header className={styles.header_background + " bg-gray-900 max-w-xl text-green-400 font-mono rounded-md"}>
      <div className={styles.header_content + " header-content bg-gray-900 px-4 py-20 rounded-md text-xl font-normal"}>
        <h1 className="text-lg mt-4 mb-4 font-normal">* SSR, SVG+JS *</h1>
      </div>
    </header>
  )
}
*/

export default HeaderHome