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

   /* работа с формой комментария */
   let submitComment = document.querySelector('.comment-form__submit');

   submitComment.addEventListener('click', (event) => {
      event.preventDefault();
      let commentForm = document.querySelector('.comment__comment-form');
      let commentAuthor = 'Nikita';
      let commentText = commentForm.textarea.value;
      commentForm.textarea.value = '';
      let mainComment = document.querySelector('.main__comment');

      let comment = document.createElement('div');
      comment.className = 'comment__item';
      let datetime = new Date();
      let dt = Intl.DateTimeFormat('ru', {
         day: 'numeric',
         month: 'numeric',
         year: 'numeric',
         hour: "numeric",
         minute: "numeric"
      }).format(datetime);
      comment.innerHTML = `
         <div class="comment__header">
            <div class="comment_avatar-wrapper">
               <img src="img/avatar.jpg" alt="" class="comment__avatar">
            </div>
            <div class="comment__author">${commentAuthor}</div>
         </div>
         <div class="comment__text">${commentText}</div>
         <div class="comment__datetime">${dt}</div>
      </div>
      `
      mainComment.append(comment);
   })

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
               if (value === password.value) {
                  return true;
               }
               return false;
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
