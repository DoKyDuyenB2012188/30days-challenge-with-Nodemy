window.onload = () => {
    const modal = document.querySelector(".modal");
    const openBtn = document.querySelector(".open-modal-btn");
    const iconcloseBtn = document.querySelector(".modal__header i");
    const closeBtn = document.querySelector(".modal__footer button");
    console.log(openBtn);
    function toggleModal() {
        modal.classList.toggle("hide");
    }
    openBtn.addEventListener('click', toggleModal);
    iconcloseBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
    modal.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) toggleModal();
    })
}