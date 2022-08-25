const express = require("express");

const Cars = require("../models/cars.models");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const car = await Cars.create(req.body);
    return res.status(201).send(car);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    let query = [];

    // searching
    if (req.query.q && req.query.q != "") {
      query.push({
        $match: {
          $or: [
            {
              name: { $regex: req.query.q, $options: "i" },
            },
            {
              type: { $regex: req.query.q, $options: "i" },
            },
            {
              city: { $regex: req.query.q, $options: "i" },
            },
            {
              "location.map": { $regex: req.query.q, $options: "i" },
            },
          ],
        },
      });
    }

    // filter

    if (req.query.economy) {
      query.push({
        $match: {
          type: req.query.economy,
        },
      });
    }

    if (req.query.mini) {
      query.push({
        $match: {
          type: req.query.mini,
        },
      });
    }

    if (req.query.compact) {
      query.push({
        $match: {
          type: req.query.compact,
        },
      });
    }

    if (req.query.midSize) {
      query.push({
        $match: {
          type: req.query.midSize,
        },
      });
    }
    // pagination

    let total = await Cars.countDocuments(query);
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;
    let skip = (page - 1) * perPage;
    query.push({
      $skip: skip,
    });
    query.push({
      $limit: perPage,
    });

    // sort

    if (req.query.sortBy && req.query.sortOrder) {
      var sort = {};
      sort[req.query.sortBy] = req.query.sortOrder == "asc" ? 1 : -1;
      query.push({
        $sort: sort,
      });
    } else {
      query.push({
        $sort: { createdAt: -1 },
      });
    }

    const cars = await Cars.aggregate(query);

    return res.status(200).send({
      message: "data Successfully fetched",
      data: {
        cars: cars,
        meta: {
          total: total,
          currentPage: page,
          perPage: perPage,
          totalPages: Math.ceil(total / perPage),
        },
      },
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await Cars.findById(req.params.id).lean().exec();

    return res.status(200).send(car);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const car = await Cars.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(car);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const car = await Cars.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(car);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
