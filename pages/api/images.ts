import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const imageData = [
    { id: 1, imageUrl: "/slides/slide-img-1.png", title: "Slide One" },
    { id: 2, imageUrl: "/slides/slide-img-2.png", title: "Slide two" },
    { id: 3, imageUrl: "/slides/slide-img-3.png", title: "Slide three" },
    { id: 4, imageUrl: "/slides/slide-img-4.png", title: "Slide four" },
    { id: 5, imageUrl: "/slides/slide-img-5.png", title: "Slide five" },
    { id: 6, imageUrl: "/slides/slide-img-6.png", title: "Slide six" },
  ];

  res.status(200).json(imageData);
};

export default handler;
