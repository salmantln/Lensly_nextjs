import {NextApiRequest, NextApiResponse} from 'next';
import Mailchimp from '@mailchimp/mailchimp_marketing';

type AddListMemberBody = {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | undefined;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {email} = req.body;

    console.log({email});

    if (!email) {
        return res.status(400).json({error: 'Email is required'});
    }

    try {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const DATACENTER = process.env.MAILCHIMP_API_SERVER;
        const data: AddListMemberBody = {
            email_address: email,
            status: 'subscribed',
        };

        Mailchimp.setConfig({
            apiKey: API_KEY,
            server: DATACENTER,
        });

        const response = await Mailchimp.lists.addListMember(AUDIENCE_ID!, data);

        console.log(response);

        return res.status(201).json({error: ''});
    } catch (error: any) {
        return res.status(500).json({error: error.message || error.toString()});
    }
}