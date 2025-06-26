import path from "node:path";
import nodemailer, { Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

export const transport: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mailusarp@gmail.com",
    pass: "ltkksghqobskbreg",
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve("./src/mail/"),
    },
    viewPath: path.resolve("./src/mail/"),
    extName: ".html",
  }) as any,
);
