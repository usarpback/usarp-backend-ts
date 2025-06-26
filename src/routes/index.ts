import { FastifyInstance } from "fastify";

import { loadAuthenticationRoutes } from "./auth.route";
import { loadBrainstormingRoutes } from "./brainstorming.route";
import { loadProjectRoutes } from "./project.route";
import { loadUserRoutes } from "./user.route";

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

export async function registerAllRoutes(app: FastifyInstance) {
  for (const { prefix, route } of routes) {
    app.register(route, { prefix });
  }
}
