/**
 * 
 * @param str 
 */
export function isEmail(str:string):boolean {
    // Verify : https://regex101.com/r/VBGyXV/1
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return re.test(str)

}