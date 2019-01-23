import {Router, Request, Response} from 'express';

const router = Router();

const PATH = `/some/path`;

router.put(PATH, (req: Request, res: Response) => {
    console.log(`\n\n*** NEW REQUEST ***
    
 • URL Params: ${JSON.stringify(req.params.roomId)}

 • Headers: ${JSON.stringify(req.headers, null, 2)}

 • Query: ${JSON.stringify(req.query, null, 2)}

 • Payload: ${JSON.stringify(req.body, null, 2)}`)

    res.status(200).send(true)
});

export default router;