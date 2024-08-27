export default function navigate(currentPage, navType) {
  const pages = ["/", "/introduction", "/identify", "/prevent", "/end"];
  const currentPageIndex = pages.findIndex((el) => el === currentPage);
  window.scrollTo(0, 0);
  // const completedPages = localStorage.getItem("completedPages");

  if (navType === "next") {
    // if (completedPages < currentPageIndex) {
    //   localStorage.setItem("completedPages", Number(completedPages) + 1);
    // }
    return pages[currentPageIndex + 1];
  } else if (navType === "back") {
    return pages[currentPageIndex - 1];
  } else {
    //Page-load
    // if (completedPages > 0 && completedPages < 5) {
    //   return pages[completedPages];
    // } else {
    return "/";
    // }
  }
}
