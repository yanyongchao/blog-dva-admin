import moment from 'moment'
const now = new Date().getTime()

export function timestampFormat(timestamp, format) {
  let result = ''
  timestamp = window.parseInt(timestamp, 10)
  if (!timestamp) {
    result = '-'
  } else if (format === 'interval') {
    let diff = (now - timestamp) / 1000
    if (diff < 60) {
      // 一分钟内
      result = '刚刚'
    } else if (diff < 60 * 60 && diff >= 60) {
      // 超过十分钟少于1小时
      result = Math.floor(diff / 60) + '分钟前'
    } else if (diff < 60 * 60 * 24 && diff >= 60 * 60) {
      // 超过1小时少于24小时
      result = Math.floor(diff / 60 / 60) + '小时前'
    } else if (diff < 60 * 60 * 24 * 3 && diff >= 60 * 60 * 24) {
      // 超过1天少于3天内
      return Math.floor(diff / 60 / 60 / 24) + '天前'
    } else {
      // 超过3天
      result = moment(timestamp).format('YYYY.MM.DD HH:mm')
    }
  } else if (format) {
    result = moment(timestamp).format(format)
  } else {
    result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }
  return result
}
