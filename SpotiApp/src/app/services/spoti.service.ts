import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SpotiService {

  constructor() { }

  // Get Token
  getToken() {
    return new Promise(function (resolve, reject) {
      // do the usual XHR stuff 
      var req = new XMLHttpRequest();
      req.open('post', "https://accounts.spotify.com/api/token", false);
      //NOW WE TELL THE SERVER WHAT FORMAT OF POST REQUEST WE ARE MAKING 
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      req.onload = function () {
        if (req.status == 200) {
          if (typeof req.response === 'string') {
            resolve(req.response);
          }
        } else {
          reject(Error(req.statusText));
        }
      };
      // handle network errors 
      req.onerror = function () {
        reject(Error("Network Error"));
      };

      // make the request 
      req.send("grant_type=client_credentials&client_id=d491c56768584819a96395b8c4b126fb&client_secret=edffe31e694344448c4a6faa14934e7b");
    });
  }

  async getArtists(nombre: string) {

    let promiseToken = await this.getToken();
    let access_token = '';

    if (typeof promiseToken === 'string') {
      let token = JSON.parse(promiseToken);
      access_token = token.access_token;
      console.log("token en promise => " + token.access_token);
    }
  
    return new Promise(function (resolve, reject) {
      // do the usual XHR stuff 
      var req = new XMLHttpRequest();
      req.open('get', "https://api.spotify.com/v1/search?q=" + nombre + "&type=artist&limit=15");
      //NOW WE TELL THE SERVER WHAT FORMAT OF POST REQUEST WE ARE MAKING 
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/json');
      req.setRequestHeader('Authorization', 'Bearer ' + access_token);

      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      // handle network errors 
      req.onerror = function () {
        reject(Error("Network Error"));
      }; // make the request 
      req.send();
    });
  }


  async getNewReleases() {
    let promiseToken = await this.getToken();
    let access_token = '';

    if (typeof promiseToken === 'string') {
      let token = JSON.parse(promiseToken);
      access_token = token.access_token;
      console.log("token en promise => " + token.access_token);
    }

    return new Promise(function (resolve, reject) {
      // do the usual XHR stuff 
      var req = new XMLHttpRequest();
      req.open('get', "https://api.spotify.com/v1/browse/new-releases?limit=15", false);
      //NOW WE TELL THE SERVER WHAT FORMAT OF POST REQUEST WE ARE MAKING 
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/json');
      req.setRequestHeader('Authorization', 'Bearer ' + access_token);

      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      // handle network errors 
      req.onerror = function () {
        reject(Error("Network Error"));
      }; // make the request 
      req.send();
    });
  }

  

  async getArtistById(id:string) {
    let promiseToken = await this.getToken();
    let access_token = '';

    if (typeof promiseToken === 'string') {
      let token = JSON.parse(promiseToken);
      access_token = token.access_token;
      console.log("token en promise => " + token.access_token);
    }

    return new Promise(function (resolve, reject) {
      // do the usual XHR stuff 
      var req = new XMLHttpRequest();
      req.open('get', 'https://api.spotify.com/v1/artists/' + id , false);
      //NOW WE TELL THE SERVER WHAT FORMAT OF POST REQUEST WE ARE MAKING 
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/json');
      req.setRequestHeader('Authorization', 'Bearer ' + access_token);

      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      // handle network errors 
      req.onerror = function () {
        reject(Error("Network Error"));
      }; // make the request 
      req.send();
    });

  }

  async getArtistTracksWithId(id:string) {
    let promiseToken = await this.getToken();
    let access_token = '';

    if (typeof promiseToken === 'string') {
      let token = JSON.parse(promiseToken);
      access_token = token.access_token;
      console.log("token en promise => " + token.access_token);
    }

    return new Promise(function (resolve, reject) {
      // do the usual XHR stuff 
      var req = new XMLHttpRequest();
      req.open('get', 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=ES', false);
      //NOW WE TELL THE SERVER WHAT FORMAT OF POST REQUEST WE ARE MAKING 
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('Content-Type', 'application/json');
      req.setRequestHeader('Authorization', 'Bearer ' + access_token);

      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      // handle network errors 
      req.onerror = function () {
        reject(Error("Network Error"));
      }; // make the request 
      req.send();
    });

  }

  // Error handling
  private error(error: any) {
    let message = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}
