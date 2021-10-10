const onActive = 'onActive'
const views = {
  HOME: {
    navBtn: 'navHome',
    section: 'sectionHome',
  },
  DEVICES: {
    navBtn: 'navDevices',
    section: 'sectionDevices',
  },
  PRICES: {
    navBtn: 'navPrices',
    section: 'sectionPrices',
  },
}
const changeView = (destination) => {
  Object.keys(views).map((view) => {
    if (view === destination) {
      document.getElementById(views[view].section).style.display = 'flex'
      document.getElementById(views[view].navBtn).classList.add(onActive)
    } else {
      document.getElementById(views[view].section).style.display = 'none'
      document.getElementById(views[view].navBtn).classList.remove(onActive)
    }
  })
}
const toHome = () => {
  changeView('HOME')
}
const toDevices = () => {
  changeView('DEVICES')
}
const toPrices = () => {
  changeView('PRICES')
}
