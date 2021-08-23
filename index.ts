import {NextApiResponse} from "next";

export const res403 = (res: NextApiResponse, message?: string) => res.status(403).send(message || "Unauthed");
export const res400 = (res: NextApiResponse, message?: string) => res.status(400).send(message || "Missing parameters");
export const res500 = (res: NextApiResponse, e: Error) => res.status(500).json({error: e});
export const res405 = (res: NextApiResponse, message?: string) => res.status(405).send(message || "Method not allowed");
export const res404 = (res: NextApiResponse, message?: string) => res.status(404).send(message || "Resource not found");
export const res200 = (res: NextApiResponse, data?: any) => res.status(200).json(data || {});
export const ssrRedirect = (destination: string) => ({redirect: {permanent: false, destination: destination}});
export const ssr404: {notFound: true} = {notFound: true};