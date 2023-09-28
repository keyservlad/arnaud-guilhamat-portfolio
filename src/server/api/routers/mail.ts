import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { sendMail } from "~/utils/sendMail";

export const mailRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), message: z.string() }),
    )
    .query(async ({ input }) => {
      console.log(input);
      await sendMail(input.email, input.name, input.message);
      return {
        greeting: `Hello ${input.name}`,
      };
    }),
});
