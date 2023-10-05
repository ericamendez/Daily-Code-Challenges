/**
 * 5 kyu Extract the domain name from a URL
 * 
 *  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 * 
 * * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

p4x-u9m4zvkisil-ofge.tv/img/
http://www.s4dbmz6ynunyfeoemjb-56qkte.io
 */

function domainName(url){
    if(url.includes('://www.')){
        return url.split('://www.')[1].split('.')[0]
    } else if(url.includes('://')){
        return url.split('://')[1].split('.')[0]
    } else if(url.includes('www.')){
        return url.split('www.')[1].split('.')[0]
    } else {
        return url.split('.')[0]
    }  
}

console.log(domainName("http://github.com/carbonfive/raygun"))