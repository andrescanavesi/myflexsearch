const express = require("express");
const router = express.Router();

const FlexSearch = require("flexsearch");
const preset = "score"; //more presets => https://www.npmjs.com/package/flexsearch#presets
const searchIndex = new FlexSearch(preset);

const wsData = require("../daos/my_data");

/**
 * Examples to execute:
 * http://localhost:3000/search?phrase=Cryptocurrency
 * http://localhost:3000/search?phrase=Cloud
 * http://localhost:3000/search?phrase=File
 * http://localhost:3000/search?phrase=Storage
 * http://localhost:3000/search?phrase=Open%20Threat
 */

buildIndex(); //we call this method here but can be also called from an endpoint

/**
 * Default endpoint. Just exposes some URLs samples
 */
router.get("/", function(req, res, next) {
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
 * Exposes and service to search in our index
 */
router.get("/search", async (req, res, next) => {
  try {
    if (searchIndex.length === 0) {
      await buildIndex();
    }

    const phrase = req.query.phrase;
    if (!phrase) {
      throw Error("phrase query parameter empty");
    }
    console.info("Searching by: " + phrase);
    //search using flexsearch. It will return a list of IDs we used as keys during indexing
    const resultIds = await searchIndex.search({
      query: phrase,
      suggest: true //When suggestion is enabled all results will be filled up (until limit, default 1000) with similar matches ordered by relevance.
    });

    console.info("results: " + resultIds.length);
    const results = getDataByIds(resultIds);
    res.json(results);
  } catch (e) {
    next(e);
  }
});

/**
 *
 * @param idsList
 * @returns an array of elements from our main collection (our indexed data) wsData
 */
function getDataByIds(idsList) {
  const result = [];
  const data = wsData.data;
  for (let i = 0; i < data.length; i++) {
    if (idsList.includes(data[i].id)) {
      result.push(data[i]);
    }
  }
  return result;
}

/**
 * Have in mind we are working with an in-memory search so be careful with the amount of data
 * you load to the index. This method shouldn't take more than a couple of seconds running.
 */
function buildIndex() {
  console.time("buildIndexTook");
  console.info("building index...");

  const data = wsData.data; //we could get our data from DB, remote web service, etc.
  for (let i = 0; i < data.length; i++) {
    //we might concatenate the fields we want for our content
    const content =
      data[i].API + " " + data[i].Description + " " + data[i].Category;
    const key = parseInt(data[i].id);
    searchIndex.add(key, content);
  }
  console.info("index built, length: " + searchIndex.length);
  console.info("Open a browser at http://localhost:3000/");
  console.timelineEnd("buildIndexTook");
}

module.exports = router;
