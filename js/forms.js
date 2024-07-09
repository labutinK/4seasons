document.addEventListener("DOMContentLoaded", (event) => {
    const formElement = document.querySelector('[data-form-profile]');
    if (formElement) {
        const validator = new FormValidator(formElement);
        const resultBox = formElement.querySelector('.form-body__results');

        formElement.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            validator.submit(() => {
                resultBox.setAttribute('data-success', true);
                setTimeout(() => {
                    resultBox.removeAttribute('data-success');
                }, 2000);
            }, () => {
                console.log('error');
            });
        });
    }
});