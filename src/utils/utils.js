export function setStore(name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
export function getStore(name) {
  if (!name) return
  return window.localStorage.getItem(name)
}
export function removeStore(name) {
  if (!name) return
  window.localStorage.removeItem(name)
}

export function getStyle(element, attr, NumberMode = 'int') {
  let target
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element,null)[attr]
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return  NumberMode === 'float'? parseFloat(target) : parseInt(target);
}

/**
 *
 * @param {HTMLElement} element  运动对象，必选
 * @param {object}      target   属性：目标值，必选
 * @param {number}      duration 运动时间，可选
 * @param {string}      mode     运动模式，可选
 * @param {function}    callback 回调函数，链式动画，可选
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback ) => {
  clearInterval(element.timer)
  if (duration instanceof Function) {
    callback = duration
    duration = 400
  } else if (duration instanceof String) {
    mode = duration
    duration = 400
  }
  if (mode instanceof Function) {
    callback = mode;
    mode = 'ease-out';
  }
  const attrStyle = attr => {
    if (attr === 'opacity') {
        return Math.round(getStyle(element, attr, 'float') * 100)
    } else {
      return getStyle(element, attr)
    }
  }
  const rootSize = parseFloat(document.documentElement.style.fontSize)
  const unit = {}
  const initState = {}
  Object.keys(target).forEach(attr => {
      if (/[^\d^\.]+/gi.test(target[attr])) {
        unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
      }else{
        unit[attr] = 'px';
      }
      initState[attr] = attrStyle(attr)
  })
  Object.keys(target).forEach(attr => {
    if (unit[attr] === 'rem') {
      target[attr] = Math.ceil(parseInt(target[attr])*rootSize)
    } else {
      target[attr] = parseInt(target[attr])
    }
  })
  let flag = true
  const remberSpeed = {}
  element.timer = setInterval(() => {
    Object.keys(target).forEach(attr => {
      let iSpeed = 0 // 步长
      let status = false // 是否仍需运动
      let iCurrent = attrStyle(attr) || 0 // 当前元素属性值
      let speedBase = 0 // /目标点需要减去的基础值，三种运动状态的值都不同
      let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
      switch (mode) {
        case 'ease-out':
          speedBase = iCurrent
          intervalTime = duration*5/ 400
          break;
        case 'linear':
          speedBase = initState[attr]
          intervalTime = duration*20/400
          break;
        case 'ease-in':
          let oldSpeed = remberSpeed[attr] || 0
          iSpeed = oldSpeed +  (target[attr] - initState[attr]) / duration
          remberSpeed[attr] = iSpeed
          break;
        default:
          speedBase = iCurrent
          intervalTime = duration*5/400
      }
      if (mode !== 'ease-in') {
        iSpeed = (target[attr] - speedBase) / intervalTime;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      }
      switch (mode) {
        case 'ease-out':
          status = iCurrent !== target[attr]
          break;
        case 'linear':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
          break;
        case 'ease-in':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
          break;
        default:
          status = iCurrent !== target[attr];
      }
      if (status) {
        flag = false
        if (attr === 'opacity') {
          element.style.filter = `alpha(opacity:${iCurrent+iSpeed})`
          element.style.opacity = (iCurrent + iSpeed) / 100
        } else if (attr === 'scrollTop') {
          element.scrollTop = iCurrent + iSpeed
        } else {
          element.style[attr] = iCurrent + iSpeed + 'px'
        }
      } else {
        flag = true
      }
      if (flag) {
        clearInterval(element.timer)
        if (callback) {
          callback()
        }
      }
    })
  }, 20)
}
export const showBack = callBack => {
  document.addEventListener('scroll', () => {
    showBackFun()
  }, false)
  document.addEventListener('touchstart', () => {
    showBackFun()
  }, {passive: true})
  document.addEventListener('touchmove', () => {
    showBackFun()
  }, {passive: true})
  document.addEventListener('touchend', () => {
    showBackFun()
  }, {passive: true})
  const showBackFun = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop > 500) {
      callBack(true)
    } else {
      callBack(false)
    }
  }
}
