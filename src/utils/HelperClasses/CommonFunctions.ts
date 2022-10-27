export default class CommonFunctions {
    public static StringFormat(str: string, ...args: string[]) {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || '')
    }
    public static ConvertObjectToQueryStringParams(obj: any){
        var queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&')
        return queryString
    }
}