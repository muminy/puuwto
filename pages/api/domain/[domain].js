const whois = require('whois-json');

export default function(request, response){
    whois(request.query.domain)
    .then(responseJson => response.json(responseJson))
}