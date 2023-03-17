import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "react-router";
import { logout } from "~/utils/auth.server";

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = async () => redirect('/');