new window.JustValidate('.new-review__form', {
    rules: {
        title: {
            required: true
        },
        review: {
            required: true
        },
        file: {
            required: true
        },
        url: {
            required: true
        }
    },
    messages: {
        title: {
            required: 'Это поле обязательно'
        },
        review: {
            required: 'Это поле обязательно'
        },
        file: {
            required: 'Это поле обязательно'
        },
        url: {
            required: 'Это поле обязательно'
        }
    },
    submitHandler: function (form, values) {
        return; // заглушка чтобы страница не сбрасывала ввод
    }
})