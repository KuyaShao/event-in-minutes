export default defineEventHandler(async (event) => {
  const cookie = getCookie(event, "auth");

  if (!cookie) {
    throw createError({
      statusCode: 401,
      statusMessage: "Not authenticated",
    });
  }

  // Clear the auth cookie
  setCookie(event, "auth", "", {
    httpOnly: true,
    sameSite: true,
    maxAge: -1, // Expire immediately
  });

  return { message: "Logged out successfully" };
});
