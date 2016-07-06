import debug from 'debug';
import * as app  from './app';

let logerror = debug('marvel:error')
  , loginfo = debug('marvel:info');

let resources = {};
    

export function create(params){
  let promise = new Promise( (resolve, reject) => {
    app.start(params, resources, (err, server) => {
      if(err) reject(err);
      resolve(server);
    });
  });
  return promise;
}
