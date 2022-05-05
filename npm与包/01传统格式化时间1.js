function dateFormat(){
    const date = new Date()
    const year = padZero(date.getFullYear())
    const month = padZero(date.getMonth() +1)
    const day = padZero(date.getDate())
    const hour = padZero(date.getHours())
    const minute = padZero(date.getMinutes())
    const second = padZero(date.getSeconds())

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
function padZero(num){
    return num > 9 ? num : '0'+num
}
module.exports = {
    dateFormat
}