/* 
  @params {String} deadline 时间戳
  @return {days,hours,minutes,seconds} timeObj
*/
export class countdown {
  constructor(deadline) {
    this.distance = (new Date(deadline).getTime() - Date.now()) / 1000 //total seconds
    this.timeObj = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }
    this.timeInterval
    if (deadline && this.distance > 0) {
      this.start()
    }
  }
  get getFormatedTime() {
    return `${this.timeObj.days}天${this.timeObj.hours}时${this.timeObj.minutes}分${this.timeObj.seconds}秒`
  }
  calc() {
    this.timeObj.days = Math.floor(this.distance / 60 / 60 / 24)
    this.timeObj.hours = Math.floor((this.distance % (60 * 60 * 24)) / (60 * 60))
    this.timeObj.minutes = Math.floor((this.distance % (60 * 60)) / 60)
    this.timeObj.seconds = Math.floor(this.distance % 60)
  }
  start() {
    this.timeInterval = setTimeout(() => {
      if (this.distance <= 0) {
        clearTimeout(this.timeInterval)
      } else {
        this.calc()
        this.distance--
        this.start()
      }
    }, 1000)
  }
  destory() {
    clearTimeout(this.timeInterval)
    this.timeObj = null
  }
}

let count = new countdown(new Date(2021, 9, 15, 3, 26))
setInterval(() => {
  console.log(count.getFormatedTime)
}, 1000)
