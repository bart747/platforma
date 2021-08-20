function HeaderHome () {
  return (
    <header className="bg-gray-900 text-green-400 font-mono rounded-md">
      <div className="header-content bg-gray-900 px-4 py-6 rounded-md text-xl font-normal">
        <h1 className="text-xl mt-4 mb-8 font-normal">Making Visually Rich, <br></br> yet Fast Web UIs</h1>
        <h2 className="text-xl mt-4 mb-4 font-normal">SSR, DataViz, SVG+JS</h2>
      </div>
      <style jsx>{`
        header {
          background-image: url("./pcbbckcomp.jpg");
          background-position: center;
          background-size: 35%;
          box-shadow: inset 0 -1px 10px #777;
        }

        .header-content {
          animation-name: flicker;
          animation-duration: 1.5s;
          animation-iteration-count: 2;
        }

        @keyframes flicker {
          from {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          60% {
            opacity: 0.7;
          }
          
          65% {
            opacity: 1;
          }

          70% {
            opacity: 0.8;
          }

          75% {
            opacity: 1;
          }

          to {
            opacity: 1
          }
        }
      `}</style>

    </header>
  )
}

export default HeaderHome