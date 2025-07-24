import express, {Request, Response} from "express";
import Task from '../models/Task';

const router = express.Router();

router.get("/get-all", async (req: Request, res: Response) => {
  try {
    const task = await Task.find({});
    res.send({task});
  } catch (e) {
    res.status(500).send(e);
  }
})

router.get("/get-one", async (req: Request, res: Response) => {
  const {_id} = req.body;
  if (!_id) {
    res.status(400).send("Please provide an _id.");
  }
  try {
    const task = await Task.findById(_id);
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
})

router.post('/create', async (req: Request, res: Response) => {
  const {title, priority} = req.body;
  if (!title) {
    res.status(400).send("Please provide a title");
  }
  try {
    const taskCreated = await Task.create({title, priority})
    res.send(taskCreated);
  } catch(e) {
    res.status(400).send(e);
  }
})

router.patch('/update-title', async (req: Request, res: Response) => {
  const {_id, title} = req.body;
  if (!_id) {
    res.status(400).send("Please provide an _id to update your task")
  }

  try {
    const updatedTask = await Task.updateOne({_id,}, {title})
    if (updatedTask.acknowledged) {
      res.status(200).send(updatedTask.acknowledged);
    } else {
      res.status(500).send("Task wasn't able to be completed");
    }
  } catch(e) {
    res.status(500).send(e);
  }
})

router.patch('/update-priority', async (req: Request, res: Response) => {
  const {_id, priority} = req.body;
  if (!_id) {
    res.status(400).send("Please provide an _id to update your task")
  }

  try {
    const updatedTask = await Task.updateOne({_id,}, {priority})
    if (updatedTask.acknowledged) {
      res.status(200).send(updatedTask.acknowledged);
    } else {
      res.status(500).send("Task wasn't able to be completed");
    }
  } catch(e) {
    res.status(500).send(e);
  }
})

router.delete("/delete", async (req: Request, res: Response) => {
  const {_id} = req.body;
  if (!_id) {
    res.status(400).send("Please provide an id to delete your task");
  }

  try {
    const deletedTask = await Task.deleteOne({_id: _id});
    if (deletedTask.acknowledged) {
      res.status(200).send(deletedTask.acknowledged);
    } else {
      res.status(500).send("Task wasn't able to be completed");
    }
  } catch (e) {
    res.status(500).send(e);
  }

})

export default router;
