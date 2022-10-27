export default class CommonFunctions {
    public static StringFormat(str: string, ...args: string[]) {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || '')
    }
    public static ConvertObjectToQueryStringParams(obj: any){
        var queryString = Object.keys(obj).map(key => {
            if (obj[key])
                return key + '=' + obj[key]
            else 
                return ''
        })
        let i = queryString.length-1
        while (queryString.length) {
            if (!queryString[i]) {
                queryString.splice(i, 1)
            }
            i--
        }
        if (queryString.includes('=')) {
            queryString.join('&')
        }
        return queryString
    }
}