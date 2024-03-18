import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';



const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.headers.cookie = '';
  proxy.web(req, res, {
    target: process.env.API_URL, 
    changeOrigin: true,
    selfHandleResponse: false,
  });

  
}