export const formatTime = (secs) => {
    if (secs < 60) {
        return `${secs}s`
    }

    const totalMins = Math.floor(secs / 60)
    const hours = Math.floor(totalMins / 60) || 0
    const minsToDisplay = totalMins % 60
    let timeStr = ``
    if (hours > 0) {
        timeStr += `${hours}h `
    }
    timeStr += `${minsToDisplay}m`

    return timeStr
}