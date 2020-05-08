const router = require("express").Router();
const Concert = require("../models/concertSchema");

router.post("/", async (request, response) => {
  try {
    const concert = await Concert.create(request.body);
    response.json(concert);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get("/:id", async (request, response) => {
  const concertId = request.params.id;
  try {
    const concert = await Concert.findById(concertId, null, {
      sort: { _id: -1 },
    });
    response.send(concert);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get("/", async (request, response) => {
  try {
    const concerts = await Concert.find();
    response.json(concerts);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.patch("/:id", async (request, response) => {
  const concertId = request.params.id;
  try {
    const updatedConcert = await Concert.findByIdAndUpdate(
      concertId,
      {
        $set: {
          artist: request.body.artist,
          date: request.body.date,
          arrival: request.body.arrival,
          location: request.body.location,
          city: request.body.city,
          price: request.body.price,
          detailText: request.body.detailText,
        },
      },
      { new: true }
    );
    response.json(updatedConcert);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
