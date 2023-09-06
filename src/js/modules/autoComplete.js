import autoComplete from "@tarekraafat/autocomplete.js";
import countryName from './../helps/contry'
export default function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autoComplete",
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countryName,
      caches: true

    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        }
      }
    },
    resultItem: {
      highlight: true,
    },
    searchEngine: 'strict'
  });
}