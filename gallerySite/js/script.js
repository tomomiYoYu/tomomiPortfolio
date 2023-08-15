// caption のオプション（img 要素の alt 属性の値をキャプションに表示）
const luminousOpts4 = {
  caption: (trigger) => {
    return trigger.querySelector("img").getAttribute("alt");
  },
};

const luminousGalleryElems2 = document.querySelectorAll(".luminous");
if (luminousGalleryElems2.length > 0) {
  //第3引数に caption のオプションを指定
  new LuminousGallery(luminousGalleryElems2, {}, luminousOpts4);
}
AOS.init();
