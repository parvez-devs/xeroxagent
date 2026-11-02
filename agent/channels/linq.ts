import { getToken } from "@vercel/connect";
import { vercelOidc } from "eve/channels/auth";
import { linqChannel } from "eve/channels/linq";

export default linqChannel({
  credentials: {
    apiKey: () => getToken("linq/xeroxvps-linq", { subject: { type: "app" } }),
    webhookVerifier: vercelOidc(),
  },
});
