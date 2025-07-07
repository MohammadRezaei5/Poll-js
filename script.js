document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".submit-btn button");
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const answearLabels = document.querySelectorAll(".answears-wrapper label");
  const resultContainer = document.querySelector(".result-container");
  const container = document.querySelector(".container");
  const yourChoiceSpan = document.querySelector(".your-choice");

  submitButton.disabled = true;

  answearLabels.forEach((label) => {
    label.addEventListener("click", () => {
      answearLabels.forEach((lbl) => {
        lbl.querySelector(".answear").classList.remove("selected");
      });
      label.querySelector(".answear").classList.add("selected");

      submitButton.disabled = false;
    });
  });

  submitButton.addEventListener("click", () => {
    let selectedAnswerText = "";

    radioButtons.forEach((radio) => {
      if (radio.checked) {
        selectedAnswerText = radio.nextElementSibling.textContent;
      }
    });

    if (selectedAnswerText) {
      submitButton.textContent = "در حال پردازش ...";
      submitButton.disabled = true;

      setTimeout(() => {
        yourChoiceSpan.textContent = selectedAnswerText;
        container.style.display = "none";
        resultContainer.style.display = "flex";
      }, 2000);
    }
  });

  window.refreshPage = () => {
    location.reload();
  };
});
