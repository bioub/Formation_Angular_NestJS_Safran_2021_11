// const btnEls = <NodeListOf<HTMLButtonElement>> document.querySelectorAll('.btn') ;
// const btnEls = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
// const btnEl = document.querySelector('button') as HTMLButtonElement;

const btnEls = document.querySelectorAll<HTMLButtonElement>('.btn');
const btnEl = document.querySelector('button') as HTMLButtonElement;

btnEl.innerText = "test";

for (const btnEl of btnEls) {
  btnEl.addEventListener('click', () => {
    console.log(btnEl.innerText);
  });
}

