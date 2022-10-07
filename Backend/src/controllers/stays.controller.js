const express = require("express");
const Stays = require("../models/stays.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const stay = await Stays.create(req.body);
    return res.status(201).send(stay);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    let query = [];

    // searching
    if (req.query.q) {
      query.push({
        $match: {
          $or: [
            {
              title: { $regex: req.query.q, $options: "i" },
            },
            {
              city: { $regex: req.query.q, $options: "i" },
            },
            {
              map: { $regex: req.query.q, $options: "i" },
            },
          ],
        },
      });
    }

    // filter

    if (req.query.dinner) {
      query.push({
        $match: {
          "amenities.dinner": Boolean(req.query.dinner),
        },
      });
    }

    if (req.query.all) {
      query.push({
        $match: {
          "amenities.all": Boolean(req.query.all),
        },
      });
    }

    if (req.query.lunch) {
      query.push({
        $match: {
          "amenities.lunch": Boolean(req.query.lunch),
        },
      });
    }

    if (req.query.breakfast) {
      query.push({
        $match: {
          "amenities.breakfast": Boolean(req.query.breakfast),
        },
      });
    }
    // pagination

    let total = await Stays.countDocuments(query);
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

    const stays = await Stays.aggregate(query);

    return res.status(200).send({
      message: "data Successfully fetched",
      data: {
        stays: stays,
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
    const stay = await Stays.findById(req.params.id).lean().exec();

    return res.status(200).send(stay);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const stay = await Stays.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(stay);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const stay = await Stays.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(stay);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
