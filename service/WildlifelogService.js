'use strict';


/**
 * Deletes a Event
 *
 * eventid String Identifier of the Event
 * no response value expected for this operation
 **/
exports.deleteEventsEventid = function (eventid) {
  return new Promise(function (resolve, reject) {
    database.deleteEvent(eventid)
      .then(function (result) {
        if (result) { // truthy row count > 0
          resolve(result);
        } else {
          reject(errApi.create404Error("Couldn't find anthing matching the request URI."));
        }
      })
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}


/**
 * Deletes a Thing
 *
 * thingid String Identifier of the Thing
 * no response value expected for this operation
 **/
exports.deleteThingsThingid = function (thingid) {
  return new Promise(function (resolve, reject) {
    database.deleteThing(thingid)
      .then(function (result) {
        if (result) { // truthy row count > 0
          resolve(result);
        } else {
          reject(errApi.create404Error("Couldn't find anthing matching the request URI."));
        }
      })
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}



/**
 * Loads a list of Event
 *
 * $page String Number of the page to retrieve. Integer value. (optional)
 * lat String Allows to filter the collections of result by the value of field lat (optional)
 * lon String Allows to filter the collections of result by the value of field lon (optional)
 * date String Allows to filter the collections of result by the value of field date (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * postcode String Allows to filter the collections of result by the value of field postcode (optional)
 * thing String Allows to filter the collections of result by the value of field thing (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * returns List
 **/
exports.getEvents = function ($page, lat, lon, date, id, $size, postcode, thing, $sort) {

  return new Promise(function (resolve, reject) {
    database.getEvents(id, date, lat, lon, postcode, thing, $page, $size, $sort)
      .then(resolve)
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}


/**
 * Loads a Event
 *
 * eventid String Identifier of the Event
 * returns Event
 **/
exports.getEventsEventid = function (eventid) {
  return new Promise(function (resolve, reject) {
    database.getEvent(eventid)
      .then(function (result) {
        if (result && result.length > 0) {
          resolve(result);
        } else {
          reject(errApi.create404Error("Couldn't find anthing matching the request URI."));
        }
      })
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}


/**
 * Loads a list of Thing
 *
 * $size String Size of the page to retrieve. Integer value (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * name String Allows to filter the collections of result by the value of field name (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * returns List
 **/
exports.getThings = function ($size, id, $sort, name, $page) {
  return new Promise(function (resolve, reject) {
    database.getThings(id, name, $page, $size, $sort)
      .then(resolve)
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}


/**
 * Loads a Thing
 *
 * thingid String Identifier of the Thing
 * returns Thing
 **/
exports.getThingsThingid = function (thingid) {
  return new Promise(function (resolve, reject) {
    database.getThing(thingid)
      .then(function (result) {
        if (result && result.length > 0) {
          resolve(result);
        } else {
          reject(errApi.create404Error("Couldn't find anthing matching the request URI."));
        }
      })
      .catch(function (e) {
        switch (e.statusCode) {
          case database.errors.DATABASE_ERROR:
            // remove database specific error - will leak information.
            reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
            break;
          case database.errors.INTERNAL_ERROR:
            reject(errApi.create500Error(e.message));
            break;
          case database.errors.PARAMETER_ERROR:
            reject(errApi.create400Error(e.message));
            break;
        }
      })
  });
}

// module.exports.getEvents =  function getEvents (req, res, next) {
//   var $page = req.swagger.params['$page'].value || null;
//   var lat = req.swagger.params['lat'].value || null;
//   var lon = req.swagger.params['lon'].value || null;
//   var date = req.swagger.params['date'].value || null;
//   var id = req.swagger.params['id'].value || null;
//   var $size = req.swagger.params['$size'].value || null;
//   var postcode = req.swagger.params['postcode'].value || null;
//   var thing = req.swagger.params['thing'].value || null;
//   var $sort = req.swagger.params['$sort'].value || null;

  
//   var response =  Wildlifelog.getEvents($page,lat,lon,date,id,$size,postcode,thing,$sort)
//     .then(function (response) {
//       utils.writeJson(res, response);
//     })
//     .catch(function (response) {
//       utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
//     });

// };


/**
 * Loads a Event
 *
 * eventid String Identifier of the Event
 * returns Event
 **/
exports.getEventsEventid = function(eventid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a list of Thing
 *
 * $size String Size of the page to retrieve. Integer value (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * name String Allows to filter the collections of result by the value of field name (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * returns List
 **/
exports.getThings = function($size,id,$sort,name,$page) {
  return new Promise(function(resolve, reject) {
    database.getThings(id, name, $page, $size, $sort)
    .then(resolve)
    .catch(function (e) {
      switch (e.statusCode) {
        case database.errors.DATABASE_ERROR:
          // remove database specific error - will leak information.
          reject(errApi.create500Error("something terrible happened with the database. Sorry..."));
          break;
        case database.errors.INTERNAL_ERROR:
          reject(errApi.create500Error(e.message));
          break;
        case database.errors.PARAMETER_ERROR:
          reject(errApi.create400Error(e.message));
          break;
      }
    })
  });
}


/**
 * Loads a Thing
 *
 * thingid String Identifier of the Thing
 * returns Thing
 **/
exports.getThingsThingid = function(thingid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"Jay\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Event
 *
 * body Event 
 * returns Event
 **/
exports.postEvents = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Thing
 *
 * body Thing 
 * returns Thing
 **/
exports.postThings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"Jay\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a Event
 *
 * eventid String Identifier of the Event
 * body Event 
 * returns Event
 **/
exports.putEventsEventid = function(eventid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"postcode\":\"M1 5GD\",\"date\":1511395200000,\"thing\":\"sample thing\",\"lat\":1.1,\"lon\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}




