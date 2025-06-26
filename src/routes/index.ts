import { FastifyInstance } from "fastify";

import { loadAuthenticationRoutes } from "./auth.route.js";
import { loadBrainstormingRoutes } from "./brainstorming.route.js";
import { loadProjectRoutes } from "./project.route.js";
import { loadUserRoutes } from "./user.route.js";
import { FastifyTypedInstance } from "@/types/fastify.js";

type RouteRegister = {
  prefix: string;
  route: (
    instance: FastifyInstance,
    options: any,
    done: VoidFunction,
  ) => void | Promise<void>;
};

const routes: RouteRegister[] = [
  { prefix: "/auth", route: loadAuthenticationRoutes },
  { prefix: "/brainstormings", route: loadBrainstormingRoutes },
  { prefix: "/projects", route: loadProjectRoutes },
  { prefix: "/users", route: loadUserRoutes },
];

export async function registerAllRoutes(app: FastifyTypedInstance) {
  for (const { prefix, route } of routes) {
    app.register(route, { prefix });
  }
}
