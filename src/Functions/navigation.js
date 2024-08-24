export default function navigate(currentPage, navType) {
  console.log(currentPage);
  const pages = ["/", "/introduction", "/prevent", "/act", "/end"];
  const currentPageIndex = pages.findIndex((el) => el === currentPage);
  console.log(currentPageIndex);

  const completedPages = localStorage.getItem("completedPages");

  if (navType === "next") {
    return pages[currentPageIndex + 1];
  } else if (navType === "back") {
    return pages[currentPageIndex - 1];
  } else {
    //Page-load
    if (completedPages > 0) {
      return pages[completedPages];
    } else {
      return currentPage;
    }
  }
}
