import {getStyle} from './utils'

export const loadMore = {
  directives: {
    'load-more': {
      bind: (el, binding) => {
        let windowHeight = window.screen.height
        let height
        let paddingBottom
        let marginBottom
        let scrollEl
        let heightEl
        let setTop // 当前元素顶部距离最近父元素顶部的距离
        let oldScrollTop
        let scrollReduce = 2
        let requestFram

        let scrollType = el.attributes.type && el.attributes.type.value ? el.attributes.type.value : 0
        if (scrollType === '2') {
          scrollEl = el
          heightEl = el.children[0]
        } else {
          scrollEl = document.body
          heightEl = el
        }
        el.addEventListener('touchestart', () => {
          height = heightEl.clientHeight
          setTop = el.offsetTop
          paddingBottom = getStyle(el, 'paddingBottom')
          marginBottom = getStyle(el, 'marginBottom');
        }, false)
        el.addEventListener('touchmove', () => {
          loadMore()
        }, false)
        el.addEventListener('touchend', () => {
          oldScrollTop = scrollEl.scrollTop
          moveEnd()
        }, false)
        const loadMore = () => {
          if (scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom - scrollReduce) {
            binding.value()
          }
        }
        const moveEnd = () => {
          requestFram = requestAnimationFrame(() => {
            if (scrollEl.scrollTop !== oldScrollTop) {
              oldScrollTop = scrollEl.scrollTop
              moveEnd()
            } else {
              cancelAnimationFrame(requestFram)
              height = heightEl.clientHeight
              loadMore()
            }
          })
        }
      }
    }
  }
}
