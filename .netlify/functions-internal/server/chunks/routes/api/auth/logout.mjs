import { d as defineEventHandler, a as getCookie, c as createError, s as setCookie } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const logout = defineEventHandler(async (event) => {
  const cookie = getCookie(event, "auth");
  if (!cookie) {
    throw createError({
      statusCode: 401,
      statusMessage: "Not authenticated"
    });
  }
  setCookie(event, "auth", "", {
    httpOnly: true,
    sameSite: true,
    maxAge: -1
    // Expire immediately
  });
  return { message: "Logged out successfully" };
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
