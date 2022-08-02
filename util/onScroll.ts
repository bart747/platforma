// example: onScroll("testID", -300, () => logger("hi"))
// negative fineTune means earlier start

function onScroll(elementID: string, fineTune: number, f: () => any): void {
  const el: any = document.getElementById(elementID);
  const pos: number = el.offsetTop;
  const startingPoint = pos + fineTune;

  let positionRecord: number = 0;
  let actionWasActive: boolean = false;
  let positionMargin: number = 10;

  function action(scrollPosition: number): void {
    if (
      scrollPosition > startingPoint &&
      scrollPosition < startingPoint + positionMargin
    ) {
      f();
      actionWasActive = true;
    }
  }

  document.addEventListener("scroll", function (): void {
    positionRecord = window.scrollY;

    if (!actionWasActive) {
      window.requestAnimationFrame(function (): void {
        action(positionRecord);
      });
    }
  });
}

export default onScroll;
