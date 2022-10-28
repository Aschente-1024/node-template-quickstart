import { Router } from "express";

const router = new Router();

router.get("/", async (req, res) => {
    res.json({ user: "works" });
});

export default router;
