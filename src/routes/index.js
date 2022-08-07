import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Mi primera página con Node.Js" });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "Acerca de mi" });
});

router.get("/contact", (req, res) => {
    res.render("contact", { title: "Contactame" });
});

export default router;