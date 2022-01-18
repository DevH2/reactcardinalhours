const getMobile = ():boolean => {
    const platforms = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]; 
    return platforms.some(platform => {
        return navigator.userAgent.match(platform)
    })
}
export default getMobile;