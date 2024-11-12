export const getScrollPosition = (el: HTMLElement) => {
    return {
        x: el.scrollLeft,
        y: el.scrollTop
    } 
}