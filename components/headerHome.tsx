function HeaderHome () {
  return (
    <header className="bg-gray-900 max-w-xl text-green-400 font-mono rounded-md">
      <div className="header-content bg-gray-900 px-4 py-20 rounded-md text-xl font-normal">
        <h1 className="text-lg mt-4 mb-8 font-normal">* Making Visually Rich, yet Fast Web UIs *</h1>
        <h2 className="text-lg mt-4 mb-4 font-normal">[ SSR, DataViz, SVG+JS ]</h2>
      </div>
      <style jsx>{`
        header {
          background-image: url("./glitch.svg");
          background-position: top;
          background-size: 33%;
          box-shadow: inset 0 -1px 10px #777;
        }

        .header-content {
          animation-name: flicker;
          animation-duration: 1s;
          box-shadow: inset 0 0 100px #252;
        }

        @keyframes flicker {
          from {
            opacity: 1;
            color: blue; 
          }

          33% {
            opacity: 0.7;
            color: blue; 
          }

          60% {
            opacity: 1;
            color: #121; 
          }
          
          65% {
            opacity: 1;
          }

          75% {
            opacity: 0.8;
          }

          80% {
            opacity: 1;
            color: green;
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