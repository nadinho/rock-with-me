const router = require("express").Router();
const Concert = require("../models/concertSchema");

router.post("/", (request, response) => {
  Concert.create(request.body)
    .then((concert) => response.json(concert))
    .catch((error) => response.json(error));
});

router.get("/:id", (request, response) => {
  Concert.find({ _id: request.params.id })
    .then((concert) => response.json(concert))
    .catch((error) => response.json(error));
});

router.get("/", (request, response) => {
  Concert.find()
    .then((concerts) => response.json(concerts))
    .catch((error) => response.json(error));
});

router.patch("/:id", (request, response) => {
  Concert.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then((concert) => response.json(concert))
    .catch((error) => response.json(error));
});

module.exports = router;

// const { Router } = require("express");
// const router = Router();

// const {
//   getConcert,
//   getConcerts,
//   postConcert,
//   updateConcert,
// } = require("../models/concerts");

// router.post(`/`, async (request, response) => {
//   try {
//     const createdConcert = await postConcert(request.body);
//     return response.json(createdConcert);
//   } catch (error) {
//     console.error(`Thats the error: ${error}`);
//     return response.end(error.message);
//   }
// });

// router.get(`/:id`, async (request, response) => {
//   try {
//     const concertId = request.params.id;
//     const concert = await getConcert(concertId);
//     return response.json(concert);
//   } catch (error) {
//     console.error(`Thats the error`, error);
//     return response.end("Error");
//   }
// });

// router.get(`/`, async (request, response) => {
//   try {
//     const concerts = await getConcerts();
//     return response.json(concerts);
//   } catch (error) {
//     console.error(`Thats the error: ${error}`);
//     return response.end("Error");
//   }
// });

// router.patch(`/:id`, async (request, response) => {
//   try {
//     const concertId = request.params.id;
//     const update = request.body;

//     const updatedResult = await updateConcert(concertId, update);
//     return response.json(updatedResult);
//   } catch (error) {
//     console.error(`That's the error: ${error}`);
//     return response.end(error.message);
//   }
// });

// module.exports = router;
