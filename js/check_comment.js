/* работа с формой комментария */
   
new window.JustValidate('.comment__comment-form', {
    rules: {
       comment: {
          required: true,
          function: (name, value) => {
             return value.length > 0;
          }
       }
    },
    messages: {
       comment: {
          required: 'Это поле обязательно'
       }
    },
    submitHandler: function (form, values) {
       let textarea = form.elements.textarea;
       let commentText = textarea.value;
       let commentAuthor = 'Nikita';
       textarea.value = '';

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
       let mainComment = document.querySelector('.main__comment');
       mainComment.append(comment);
    }
 });
