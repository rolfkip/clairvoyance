//league API route
var LeagueRoute = function(router, winston) {
    router.route('/mid')
        .get(function(req, res) {
            let summoner = req.query.summonerId;
            let base = "https://na.api.pvp.net";
            let apiKey = "RGAPI-d667342e-6ca2-44bc-91b0-fcfa1ed0b8ba";
            let endpoint = base + "/api/lol/na/v1.4/summoner/by-name/" + summoner + "?api_key=" + apiKey;

            function status(response) {  
                if (response.status >= 200 && response.status < 300) {  
                    return Promise.resolve(response)  
                } else {  
                    return Promise.reject(new Error(response.statusText))  
                }  
            }

            function json(response) {  
                return response.json();
            }

            return fetch(endpoint)
            .then(status)
            .then(json);
        });
};
module.exports = LeagueRoute;