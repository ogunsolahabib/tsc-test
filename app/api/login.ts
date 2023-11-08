//next library
import { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL } from '../config';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req;

    if (method === 'POST') {
        fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        })
            .then((response) => {
               console.log(response);
            })
            .catch(({ response }) =>
                res.status(response.status).json(response.data)
            );
    } else {
        return res.status(400).json({ message: 'Unsupported Method' });
    }
};

export default handler;
