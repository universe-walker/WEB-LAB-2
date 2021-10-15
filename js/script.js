document.addEventListener('DOMContentLoaded', function() {
   /* работа с модальным  окном */
   let loginLink = document.querySelector('#login_link');
   let modalWindow = document.querySelector('.modal__wrapper');
   let blocks = document.querySelector('.wrapper').childNodes;

   function toggleBlurAllExceptModalWindow() {
      blocks.forEach((e) => {
         if (e.nodeName !== '#text') {
            if (!e.classList.contains('modal__wrapper')) {
               e.classList.toggle('blur');
            }
         }
      })
   }

   loginLink.addEventListener('click', () => {
      modalWindow.classList.toggle('hidden');
      toggleBlurAllExceptModalWindow();
   });

   let modalCancel = document.querySelector('.modal__cancel');
   modalCancel.addEventListener('click', () => {
      modalWindow.classList.toggle('hidden');
      toggleBlurAllExceptModalWindow();
   });

   /* валидация регистрации/входа */

   new window.JustValidate('.modal__sign-up', {
      rules: {
         name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            function: (name, value) => {
               const regex = RegExp('^[^ -][А-Яа-яЁё -]+');
               return regex.test(value);
            }
         },
         email: {
            required: true,
            email: true
         },
         phone: {
            required: true,
            minLength: 11,
            maxLength: 11
         },
         password: {
            required: true,
            maxLength: 20,
            minLength: 6
         },
         password_repeat: {
            required: true,
            maxLength: 20,
            minLength: 6,
            function: (name, value) => {
               let regForm = document.querySelector('.modal__sign-up');
               let password = regForm.elements.password;
               return value === password.value;
            }
         },
         personal_data: {
            required: true,
         }
      },
      messages: {
         name: {
            required: 'Это поле обязательное',
            maxLength: 'Поле должно содержать максимум :value символов',
            minLength: 'Поле должно содержать минимум :value символов',
            function: 'Может содержать только русские буквы, пробелы, дефисы'
         },
         email: { 
            required: 'Это поле обязательное',
            email: 'Пожалуйста, введите правильный email',
            remote: 'Email уже существует'
         },
         phone: {
            required: 'Это поле обязательное',
            maxLength: 'Поле должно содержать максимум :value символов',
            minLength: 'Поле должно содержать минимум :value символов',
         },
         password: {
            required: 'Это поле обязательное',
            password: 'Пароль должен содержать цифры и буквы',
            maxLength: 'Поле должно содержать максимум :value символов',
            minLength: 'Поле должно содержать минимум :value символов',
         },
         password_repeat: {
            required: 'Это поле обязательное',
            password: 'Пароль должен содержать цифры и буквы',
            maxLength: 'Поле должно содержать максимум :value символов',
            minLength: 'Поле должно содержать минимум :value символов',
            function: 'Пароли должны совпадать'
         },
         personal_data: {
            required: 'Это поле обязательное',
         }
      }
   });

   /* валидация формы входа */

   new window.JustValidate('.modal__log-in', {
      rules: {
         email: {
            required: true,
            email: true
         },
         password: {
            required: true,
            maxLength: 20,
            minLength: 6
         }
      },
      messages: {
         email: { 
            required: 'Это поле обязательное',
            email: 'Пожалуйста, введите правильный email',
            remote: 'Email уже существует'
         },
         password: {
            required: 'Это поле обязательное',
            password: 'Пароль должен содержать цифры и буквы',
            maxLength: 'Поле должно содержать максимум :value символов',
            minLength: 'Поле должно содержать минимум :value символов',
         }
      }
   });

}, false);
