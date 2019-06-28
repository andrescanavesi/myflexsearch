var express = require('express');
var router = express.Router();

const FlexSearch = require("flexsearch");
const preset = "score"; //more presets => https://www.npmjs.com/package/flexsearch#presets
const searchIndex = new FlexSearch(preset);

const wsData = require('../daos/my_data');

/**
 * Examples to execute:
 * http://localhost:3000/search?phrase=Cryptocurrency
 * http://localhost:3000/search?phrase=Cloud
 * http://localhost:3000/search?phrase=File
 * http://localhost:3000/search?phrase=Storage
 * http://localhost:3000/search?phrase=Open%20Threat
 */

buildIndex();

/**
 *
 */
router.get('/', function(req, res, next) {
  const results = [
    {
      request: "http://localhost:3000/search?phrase=Cryptocurrency"
    },
    {
      request: "http://localhost:3000/search?phrase=Cloud"
    },
    {
      request: "http://localhost:3000/search?phrase=File"
    },
    {
      request: "http://localhost:3000/search?phrase=Storage"
    },
    {
      request: "http://localhost:3000/search?phrase=Open%20Threat"
    }
  ];
  res.json(results);
});


/**
 *
 */
router.get('/search', async (req, res, next) => {
  try{
    if(searchIndex.length === 0){
      await buildIndex();
    }

    const phrase = req.query.phrase;
    if(!phrase){
      throw Error('phrase query parameter empty');
    }
    console.info('Searching by: '+phrase);
    //search using flexsearch
    const resultIds = await searchIndex.search({
      query: phrase,
      suggest: true //When suggestion is enabled all results will be filled up (until limit, default 1000) with similar matches ordered by relevance.
    });

    console.info('results: '+resultIds.length);
    const results = getDataByIds(resultIds);
    res.json(results);

  } catch (e) {
    next(e);
  }
});

/**
 *
 * @param idsList
 * @returns {Array}
 */
function getDataByIds(idsList){
  const result = [];
  const data = wsData.data;
  for(let i = 0; i< data.length; i++) {
    if(idsList.includes(data[i].id)) {
      result.push(data[i]);
    }
  }
  return result;
}

/**
 * 
 */
function buildIndex(){
  console.info('building index...');
  console.log('length: '+wsData.data.length);

  const data = wsData.data;
  for(let i = 0; i< data.length; i++){
    const content = data[i].API+' '+data[i].Description+' '+data[i].Category;
    const key = parseInt(data[i].id);
    searchIndex.add(key, content);

  }
  //console.info(data);
  console.info('index built');
}


module.exports = router;
