const getScrollPos = () => (
  window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop
);

export default getScrollPos;
