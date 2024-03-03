/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1": {
    get: operations["AppController_getHello"];
  };
  "/v2": {
    get: operations["AppController_getHello2"];
  };
  "/v3": {
    get: operations["AppController_getHello3"];
  };
  "/user": {
    get: operations["UserController_findAll"];
    post: operations["UserController_create"];
  };
  "/user/{id}": {
    get: operations["UserController_findOne"];
    delete: operations["UserController_remove"];
    patch: operations["UserController_update"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    CreateUserDto: {
      firstName: string;
      lastName: string;
    };
    User: {
      id: number;
      firstName: string;
      lastName: string;
      /** @default true */
      isEnabled?: boolean;
    };
    Test: {
      firstName: string;
    };
    UpdateUserDto: Record<string, never>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AppController_getHello: {
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  AppController_getHello2: {
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  AppController_getHello3: {
    responses: {
      200: {
        content: {
          "application/json": number;
        };
      };
    };
  };
  UserController_findAll: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
    };
  };
  UserController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  UserController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Test"];
        };
      };
    };
  };
  UserController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  UserController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
}