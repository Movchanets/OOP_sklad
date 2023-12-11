import { APP_ENV } from "../../../env";
import http from "../../../http_common";

export const config = {
  height: 500,
  language: "uk",
  menubar: true,
  images_file_types: "jpg,jpeg",
  block_unsupported_drop: false,
  menu: {
    file: {
      title: "File",
      items: "newdocument restoredraft | preview | print ",
    },
    edit: {
      title: "Edit",
      items: "undo redo | cut copy paste | selectall | searchreplace",
    },
    view: {
      title: "View",
      items:
        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen",
    },
    insert: {
      title: "Insert",
      items:
        "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
    },
    format: {
      title: "Format",
      items:
        "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat",
    },
    tools: {
      title: "Tools",
      items: "spellchecker spellcheckerlanguage | code wordcount",
    },
    table: {
      title: "Table",
      items: "inserttable | cell row column | tableprops deletetable",
    },
    help: { title: "Help", items: "help" },
  },
  plugins: [
    "image",
    "lists advlist autolink link image imagetools charmap print preview anchor",
    "searchreplace visualblocks code fullscreen textcolor ",
    "insertdatetime media table paste code help wordcount",
  ],
  toolbar:
    "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor",
  content_langs: [
    { title: "English", code: "en" },
    { title: "Українська", code: "ua" },
  ],
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

  file_picker_callback: (cb: any, value: any, meta: any) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.addEventListener("change", (e: any) => {
      const files = e.target.files;
      if (files) {
        const file = files[0];
        //Перевірка на тип обраного файлу - допустимий тип jpeg, png, gif
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file.type)) {
          alert("Не допустимий тип файлу");
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          const base64 = reader.result as string;
          http
            .post("api/Image/uploadWebP", { imageBase64: base64 })
            .then((resp) => {
              const fileName = APP_ENV.REMOTE_HOST_IMAGE_URL + resp.data;
              cb(fileName);
            });
        };
      }
      e.target.value = "";
    });

    input.click();
  },
};
