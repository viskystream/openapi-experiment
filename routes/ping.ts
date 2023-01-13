import { Request, Response } from 'express';
module.exports = {
    // the express handler implementation for ping
    ping: (req: Request, res: Response) => res.status(200).send('pong'),
};