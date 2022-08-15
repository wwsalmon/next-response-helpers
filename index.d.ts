import { NextApiResponse } from "next";
export const res403: (res: NextApiResponse, message?: string) => any;
export const res400: (res: NextApiResponse, message?: string) => any;
export const res500: (res: NextApiResponse, e: Error) => any;
export const res405: (res: NextApiResponse, message?: string) => any;
export const res404: (res: NextApiResponse, message?: string) => any;
export const res200: (res: NextApiResponse, data?: any) => any;
export const ssrRedirect: (destination: string) => {
    redirect: {
        permanent: boolean;
        destination: string;
    };
};
export const ssr404: {
    notFound: true;
};

//# sourceMappingURL=index.d.ts.map
