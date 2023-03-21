var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-KRGNQEOM.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_node2 = require("@remix-run/node");

// app/utils/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    }
  })).id, email: user.email };
};

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "todo-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function register(user) {
  if (await prisma.user.count({ where: { email: user.email } }))
    return (0, import_node2.json)(
      { error: "User already exists with that email" },
      { status: 400 }
    );
  let newUser = await createUser(user);
  return newUser ? createUserSession(newUser.id, "/") : (0, import_node2.json)(
    {
      error: "Something went wrong trying to create a new user.",
      fields: { email: user.email, password: user.password }
    },
    { status: 400 }
  );
}
async function login({ email, password }) {
  let user = await prisma.user.findUnique({
    where: { email }
  });
  return !user || !await import_bcryptjs2.default.compare(password, user.password) ? (0, import_node2.json)({ error: "Incorrect login" }, { status: 400 }) : createUserSession(user.id, "/");
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0, profile: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ request }) => (await requireUserId(request), null);
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen bg-slate-700 flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-blue-600 font-extrabold text-5xl", children: "TailwindCSS Is Working!" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react"), import_react5 = require("react");

// app/components/layout.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-screen w-full bg-blue-600 font-mono", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/form-field.tsx
var import_react3 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  let [errorText, setErrorText] = (0, import_react3.useState)(error);
  return (0, import_react3.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor, className: "text-blue-600 font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "input",
      {
        onChange: (e) => {
          onChange(e), setErrorText("");
        },
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2",
        value
      },
      void 0,
      !1,
      {
        fileName: "app/components/form-field.tsx",
        lineNumber: 30,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: errorText || "" }, void 0, !1, {
      fileName: "app/components/form-field.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_node3 = require("@remix-run/node");

// app/utils/ validators.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Please enter a password that is at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/routes/login.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => await getUser(request) ? (0, import_node3.redirect)("/") : null, action = async ({ request }) => {
  let form = await request.formData(), action2 = form.get("_action"), email = form.get("email"), password = form.get("password"), firstName = form.get("firstName"), lastName = form.get("lastName");
  if (typeof action2 != "string" || typeof email != "string" || typeof password != "string")
    return (0, import_node3.json)({ error: "Invalid Form Data", form: action2 }, { status: 400 });
  if (action2 === "register" && (typeof firstName != "string" || typeof lastName != "string"))
    return (0, import_node3.json)({ error: "Invalid Form Data", form: action2 }, { status: 400 });
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...action2 === "register" ? {
      firstName: validateName(firstName || ""),
      lastName: validateName(lastName || "")
    } : {}
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node3.json)(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action2
      },
      { status: 400 }
    );
  switch (action2) {
    case "login":
      return await login({ email, password });
    case "register":
      return firstName = firstName, lastName = lastName, await register({ email, password, firstName, lastName });
    default:
      return (0, import_node3.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
};
function Login() {
  var _a, _b, _c, _d;
  let [action2, setAction] = (0, import_react5.useState)("login"), actionData = (0, import_react4.useActionData)(), firstLoad = (0, import_react5.useRef)(!0), [errors, setErrors] = (0, import_react5.useState)((actionData == null ? void 0 : actionData.errors) || {}), [formError, setFormError] = (0, import_react5.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react5.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  });
  (0, import_react5.useEffect)(() => {
    if (!firstLoad.current) {
      let newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState), setFormError(""), setFormData(newState);
    }
  }, [action2]), (0, import_react5.useEffect)(() => {
    firstLoad.current || setFormError("");
  }, [formData]), (0, import_react5.useEffect)(() => {
    firstLoad.current = !1;
  }, []);
  let handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  }, stateAction = action2 === "login" ? "Sign In" : "Sign Up";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        onClick: () => setAction(action2 == "login" ? "register" : "login"),
        className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
        children: stateAction
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 126,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-5xl font-extrabold text-yellow-300", children: "Todo" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-semibold text-slate-300", children: action2 === "login" ? "Login" : "Registration" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full", children: formError }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        FormField,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email"),
          error: errors == null ? void 0 : errors.email
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 139,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        FormField,
        {
          htmlFor: "password",
          type: "password",
          label: "Password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password"),
          error: errors == null ? void 0 : errors.password
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 146,
          columnNumber: 11
        },
        this
      ),
      action2 === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          FormField,
          {
            htmlFor: "firstName",
            label: "First Name",
            onChange: (e) => handleInputChange(e, "firstName"),
            value: formData.firstName,
            error: errors == null ? void 0 : errors.firstName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          FormField,
          {
            htmlFor: "lastName",
            label: "Last Name",
            onChange: (e) => handleInputChange(e, "lastName"),
            value: formData.lastName,
            error: errors == null ? void 0 : errors.lastName
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 163,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 155,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
          name: "_action",
          value: action2,
          children: stateAction
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 173,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "00e91a48", entry: { module: "/build/entry.client-H63DSAEY.js", imports: ["/build/_shared/chunk-ZJL2GVLK.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AYW4KZ3R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2VCRQ24T.js", imports: ["/build/_shared/chunk-44UU53BA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-RBAVBNNA.js", imports: ["/build/_shared/chunk-44UU53BA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-00E91A48.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
