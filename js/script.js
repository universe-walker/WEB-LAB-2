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

}, false);
