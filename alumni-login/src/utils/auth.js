export const getCurrentUser = () => {
  try {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;

    const parsed = JSON.parse(storedUser);
    const user = parsed.currentUser || parsed.user || parsed;

    return { ...user, token: user.tokenString || null };
  } catch {
    return null; // silently fail if JSON is invalid
  }
};
