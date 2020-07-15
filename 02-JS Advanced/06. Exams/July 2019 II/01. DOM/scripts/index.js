function mySolution() {

    let inputTextarea = document.getElementsByTagName('textarea')[0];
    let usernameArea = document.querySelector('input[type="username"]');
    let sendButton = document.querySelector('#inputSection div button');

    sendButton.addEventListener('click', sendQuestion);

    function sendQuestion() {
        let inputText = inputTextarea.value;
        let username = usernameArea.value;

        if (inputTextarea.value !== '') {
            let pendingQuestionElement = document.querySelector('#pendingQuestions');

            let pendingQuestionsDiv = document.createElement('div');
            pendingQuestionsDiv.setAttribute('class', 'pendingQuestion');
            pendingQuestionElement.appendChild(pendingQuestionsDiv);

            let img = document.createElement('img');
            img.setAttribute('src', './images/user.png');
            img.setAttribute('width', 32);
            img.setAttribute('height', 32);
            pendingQuestionsDiv.appendChild(img);

            let usernameSpan = document.createElement('span');

            if (usernameArea.value !== '') {
                usernameSpan.textContent = username;
            } else {
                usernameSpan.textContent = 'Anonymous';
            }

            pendingQuestionsDiv.appendChild(usernameSpan);

            let p = document.createElement('p');
            p.textContent = inputText;
            pendingQuestionsDiv.appendChild(p);

            let actionDiv = document.createElement('div');
            actionDiv.setAttribute('class', 'actions');
            pendingQuestionsDiv.appendChild(actionDiv);

            let archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.setAttribute('class', 'archive');
            actionDiv.appendChild(archiveBtn);
            
            archiveBtn.addEventListener('click', function () {
                pendingQuestionsDiv.remove();
            });

            let openBtn = document.createElement('button');
            openBtn.textContent = 'Open';
            openBtn.setAttribute('class', 'open');
            actionDiv.appendChild(openBtn);

            openBtn.addEventListener('click', function () {

                let openQuestionElement = document.getElementById('openQuestions');

                let openQuestionDiv = document.createElement('div');
                openQuestionDiv.setAttribute('class', 'openQuestion');
                openQuestionElement.appendChild(openQuestionDiv);

                let img = document.createElement('img');
                img.setAttribute('src', './images/user.png');
                img.setAttribute('width', 32);
                img.setAttribute('height', 32);
                openQuestionDiv.appendChild(img);

                let usernameSpan = document.createElement('span');

                if (usernameArea.value !== '') {
                    usernameSpan.textContent = username;
                } else {
                    usernameSpan.textContent = 'Anonymous';
                }

                openQuestionDiv.appendChild(usernameSpan);

                pendingQuestionsDiv.remove();

                let p = document.createElement('p');
                p.textContent = inputText;
                openQuestionDiv.appendChild(p);

                let actionDiv = document.createElement('div');
                actionDiv.setAttribute('class', 'actions');
                openQuestionDiv.appendChild(actionDiv);

                let replyBtn = document.createElement('button');
                replyBtn.setAttribute('class', 'reply');
                replyBtn.textContent = 'Reply';
                actionDiv.appendChild(replyBtn);

                replyBtn.addEventListener('click', function () {

                    let replyDiv = document.createElement('div');
                    replyDiv.setAttribute('class', 'replySection');
                    openQuestionDiv.appendChild(replyDiv);

                    let input = document.createElement('input');
                    input.setAttribute('class', 'replyInput');
                    input.setAttribute('type', 'text');
                    input.setAttribute('placeholder', 'Reply to this question here...');
                    replyDiv.appendChild(input);

                    let btn = document.createElement('button');
                    btn.setAttribute('class', 'replyButton');
                    btn.textContent = 'Send';
                    replyDiv.appendChild(btn);
                    replyDiv.style.display = block;


                    btn.addEventListener('click', function () {
                        replyDiv.style.display = block;

                        let ol = document.createElement('ol');
                        ol.setAttribute('class', 'reply');
                        ol.setAttribute('type', '1');

                        let replyInput = document.querySelector('#openQuestions  div  div  input');
                        ol.textContent = replyInput.textContent;

                        replyDiv.appendChild(ol);                        
                    }); 
                });
            });
        }

        inputTextarea.value = '';
        usernameArea.value = '';
    }
}
