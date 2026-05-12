import { Router, Request, Response } from "express";
import Task from "../models/Tasks";

const router = Router();

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("tasks/create");
  })
  .post(async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      await Task.create({ title, description });
      res.redirect("/tasks/list");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al guardar la tarea");
    }
  });

router.route("/list")
  .get(async (req: Request, res: Response) => {
    try {
      const tasks = await Task.findAll({ raw: true });
      res.render("tasks/list", { tasks });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener las tareas");
    }
  });

router.route("/delete/:id")
  .get(async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await Task.destroy({ where: { id } });
      res.redirect("/tasks/list");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al eliminar la tarea");
    }
  });

router.route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id, { raw: true });
      res.render("tasks/edit", { task });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener la tarea para editar");
    }
  })
  .post(async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await Task.update({ title, description }, { where: { id } });
      res.redirect("/tasks/list");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al actualizar la tarea");
    }
  });

export default router;
