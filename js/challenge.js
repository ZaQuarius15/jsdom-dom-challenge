document.addEventListener("DOMContentLoaded", function() {
    let i = 0;
    const counter = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.querySelector(".likes");
    const comments = document.getElementById("list");
    const commentForm = document.getElementById("comment-form");
    const submit = document.getElementById("submit");
    let runTime = setInterval(increaseCounter, 1000);
    let likeInstances = [];
    

    function increaseCounter() {
        i++;
        counter.innerHTML = i
    }

    minus.addEventListener("click", (e) => {
        i--;
        counter.innerHTML = i
    })

    plus.addEventListener("click", (e) => {
        i++;
        counter.innerHTML = i
    })

    heart.addEventListener("click", (e) => {
        likes.innerHTML = ''
        const currentCount = i;
        const countLikes = likeInstances.find(l => l.countId == currentCount);
        if  (countLikes) {
            countLikes.count += 1
        } else {
            const newLike = {
                countId: currentCount,
                count: 1
            }
            likeInstances.push(newLike)
        }
        for (like of likeInstances) {
            const tern = (like.count == 1) ? "like" : "likes";
            const li = document.createElement("li");
            li.innerText = `${like.countId} has ${like.count} ${tern}`
            likes.appendChild(li)
        }
    })

    pause.addEventListener("click", () => {
        if (pause.innerText == 'pause') {
            clearInterval(runTime);
            pause.innerText = 'resume';
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            commentForm.diaabled = true;
        } else {
            runTime = setInterval(increaseCounter, 1000);
            pause.innerText = 'pause';
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            commentForm.diabled = false;
        }     
    })

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const newComment = e.target.previousElementSibling.previousElementSibling.value;
        commentForm.reset();
        const div = document.createElement('div');
        div.innerText = newComment;
        comments.appendChild(div);
    })
})
