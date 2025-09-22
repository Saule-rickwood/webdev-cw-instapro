import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // @TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      Cтраница добавления поста
       <div class="upload-image-container"></div>
       Опишите фотографию:
      <textarea class="add-post-textarea"></textarea>
      <button class="button" id="add-button">Добавить</button>
    </div>
  `;

    appEl.innerHTML = appHtml;
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
    const uploadImageContainer = appEl.querySelector(".upload-image-container");
    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: uploadImageContainer,
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
    const textArea = document.querySelector(".add-post-textarea");
   
    document.getElementById("add-button").addEventListener("click", () => {
      // if (imageUrl === "") {
      //   alert("Введите картинку");
      //   return;
      // }
      // if (textArea.value === "") {
      //   alert("Введите описание");
      //   return;
      // }
      onAddPostClick({
        description: textArea.value,
        imageUrl,
      });
    });
  };

  render();
}
