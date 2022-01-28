function onScroll(startingPoint: number, f: (                                                                                                             ) => any) {
  let positionRecord:number = 0
  let actionWasActive: boolean = false
  let positionMargin: number = 50

  function action(scrollPosition) {
    if (
      scrollPosition > startingPoint
      &&
      scrollPosition < startingPoint + positionMargin
    ) {
      f()
      actionWasActive = true
    }
  }

  document.addEventListener('scroll', function (e) {
    positionRecord = window.scrollY;

    if (!actionWasActive) {
      window.requestAnimationFrame(function () {
        action(positionRecord);
      });
    }
  })
}

export default onScroll