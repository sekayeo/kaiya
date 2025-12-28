export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function createPageUrl(page) {
  if (page === "Home") return "/";
  if (page === "Store") return "/store";
  return "/";
}
