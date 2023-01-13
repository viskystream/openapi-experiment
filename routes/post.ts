import { Request, Response } from 'express';
module.exports = {
    post: (req: Request, res: Response) => {
        const success = req.body.id === 1 && req.body.name === "bar";
        res.status(200).json({"Success": success});
    },
};