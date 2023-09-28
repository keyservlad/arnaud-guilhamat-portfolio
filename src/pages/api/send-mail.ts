import type { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "~/utils/sendMail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Extract query parameters with default empty strings
  const email = req.query.email ?? "";
  const subject = req.query.subject ?? "";
  const message = req.query.message ?? "";

  console.log(email, subject, message);
  await sendMail(email as string, subject as string, message as string);
  return res.status(200).json({ message: "ok" });
}
