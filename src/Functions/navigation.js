export default function navigate(currentPage) {
  const pages = ["/", "/introduction", "/identify", "/prevent", "/end"];
  const currentPageIndex = pages.findIndex(
    (el) => el === currentPage.replace("#", "")
  );
  window.scrollTo(0, 0);

  return pages[currentPageIndex + 1];
}
