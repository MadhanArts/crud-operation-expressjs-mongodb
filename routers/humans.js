import express from "express";
import Human from "../models/human.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // res.send("Get Request from HUMANS");
    try {
        const humans = await Human.find();
        res.json(humans);
    } catch (error) {
        res.send("Error " + error);
    }
});

router.get("/:id", async (req, res) => {
    // res.send("Get Request from HUMANS");
    try {
        const human = await Human.findById(req.params.id);
        res.json(human);
    } catch (error) {
        res.send("Error " + error);
    }
});

router.post("/", async (req, res) => {
    const human = new Human({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });

    try {
        const data = await human.save();
        res.json(data);
    } catch (error) {
        res.send("Error " + error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const human = await Human.findById(req.params.id);
        human.sub = req.body.sub;
        const data = await human.save();
        res.json(data);
    } catch (error) {
        res.send("Error " + error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const human = await Human.findById(req.params.id);
        const data = await human.remove();
        res.json(data);
    } catch (error) {
        res.send("Error " + error);
    }
});

export default router;
