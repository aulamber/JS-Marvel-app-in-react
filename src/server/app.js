import debug from 'debug';
import http from 'http';
import path from 'path';
import async from 'async';
import {default as logger} from 'morgan';
import {default as bodyParser} from 'body-parser';
import express from 'express';

let logerror = debug('timetrack:error')
  , loginfo = debug('timetrack:info');

export function start(params, resources, cb) {
  let app = express()
    , httpServer = http.createServer(app);


  function stop(cb){
    httpServer.close(()=>{httpServer.unref(); cb()});
  }

  async.parallel({
    // init http depending on param.js
    http(cb){
      let port = params.server.port;
      let host = params.server.host || '0.0.0.0';
      httpServer.listen(port, host, function() {
        loginfo(`HTTP server listening on: ${params.server.url}`);
        cb();
      });
    },
  }, function(err){
    if(err)return cb(err);

    // register middleware, order matters

    // remove for security reason
    app.disable('x-powered-by');
    // usually node is behind a proxy, will keep original IP
    app.enable('trust proxy');

    // register bodyParser to automatically parse json in req.body and parse url
    // params
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.use(bodyParser.json({limit: '10mb', extended: true}));


    app.use(logger('dev'));
    app.use(express.static(path.join(__dirname, '../../../../public')));
    app.use('/build', express.static(path.join(__dirname, '../../../build')));
    app.use(function(req, res, next){res.sendFile(path.join(__dirname, '../../public/index.html')) }); 

    //require('./ping').init(app, resources);
    //require('./coucou').init(app, resources);
    //require('./companies').init(app, resources);
    //require('./companyworkers').init(app, resources);
    //require('./people').init(app, resources);
    // register morgan logger


    cb(null, {stop: stop});
  });
}

