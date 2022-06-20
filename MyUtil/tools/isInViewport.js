export function isInViewport(query) {
    let ele = document.querySelector(query)
    if (ele) {
      const rect = ele.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    else {
      throw new Error('Element not exist')
    }
  }