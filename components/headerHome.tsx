import styles from './header.module.css'

function HeaderHome () {
  return (
    <header>
      <div className="bg-image-trees bg-cover rounded-full w-64 h-64 mx-auto blur-lg">
        <div className="bg-gradient-to-r from-yellow-400 via-white to-blue-500 opacity-50
                        rounded-full w-64 h-64">
          <div className="font-mono text-black text-center text-2xl m-0 py-24 leading-5">
            <div className="">U</div><div className="">I</div>
            <div className="">∴</div>
            <div className="">X</div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-normal text-gray-600 text-2xl tracking-tight ">clean<br />modular<br />interfaces</h1>
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