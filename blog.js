  function ajouter(id) {
    let article = document.getElementById(id);
    let input = article.querySelector('input');
    let comments = article.querySelector('.comments');
    
    if (input.value.trim() !== '') {
        let div = document.createElement('div');
        div.textContent = input.value;
        div.style.color = 'green'; 
        div.style.margin = '0 auto'; 
        div.style.padding = '10px';
        div.style.width = "25%";
        div.style.backgroundColor="white";
        div.style.marginTop ='5px';
        div.style.borderRadius='10px';
        comments.appendChild(div);
        input.value = ''; 
    }
}