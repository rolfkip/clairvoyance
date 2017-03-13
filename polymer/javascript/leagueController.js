class leagueController {
    constructor() {}

    get base() {
        return "https://na.api.pvp.net";
    }

    get apiKey() {
        return "RGAPI-d667342e-6ca2-44bc-91b0-fcfa1ed0b8ba";
    }

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    isInGame(summoner) {
        //try {
            /*let sumidEndpoint = this.base + "/api/lol/na/v1.4/summoner/by-name/" + summoner + "?api_key=" + this.apiKey;
            console.log(sumidEndpoint);
            let sumid = this.leagueGet(sumidEndpoint);
            return sumid.deadeyerolf.id;*/
            /*let endpoint = this.base + "/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/" + sumid
            return JSON.stringify(this.leagueGet(endpoint));
        } catch(err) {
            return "Summoner is not in a game!";
        }*/
    }

    leagueGet() {
        var myHeaders = new Headers();
        var myInit = {
            method: 'GET',
            mode: 'cors'
        };
        var summonerInfo;

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

        fetch(endpoint, myInit)
        .then(status)
        .then(json)
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
            summonerInfo = data;
        }).catch(function(err) {
            console.log('Request failed', error);  
        });

        return data;*/
    }
}