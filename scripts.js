const modalReceitas = document.querySelector('.modal_receitas')
const receitas = document.querySelectorAll('.receita')


for (let receita of receitas) {
  receita.addEventListener("click", function(){
    const receitaId = receita.getAttribute("id")
    modalReceitas.classList.add('active')
    modalReceitas.querySelector("img").src = `/assets/${receitaId}.png`;
  })
};

document.querySelector(".close_modal").addEventListener("click", function() {
  modalReceitas.classList.remove("active")
  modalReceitas.querySelector("img").src = ""
});




