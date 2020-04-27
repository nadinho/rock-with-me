const { Router } = require("express");
const router = Router();

const { getConcert, getConcerts, postConcert } = require("../models/concerts");

router.post(`/`, async (request, response) => {
  try {
    console.log(request);
    console.log(request.body);
    const createdConcert = await postConcert(request.body);
    return response.json(createdConcert);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end(error.message);
  }
});

router.get(`/:id`, async (request, response) => {
  try {
    const concertId = request.params.id;
    const concert = await getConcert(concertId);
    return response.json(concert);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

router.get(`/`, async (request, response) => {
  try {
    const concerts = await getConcerts();
    return response.json(concerts);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

module.exports = router;
