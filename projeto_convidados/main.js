// Relacionando elementos do HTML com o JS

const inputText = document.getElementById("input");
const btnadd = document.getElementById("btnadd");
const btnapg = document.getElementById("btnapaga");
const listconvid = document.getElementById("convidados");


btnadd.addEventListener("click", addConvidados);

// Validando com a tecla 'Enter'

function enter (enter) {

    if(enter.key === "Enter"){
        addConvidados();
    }
}

inputText.addEventListener("keydown", enter);

//  Validando o input

function addConvidados () {
    const text = inputText.value.trim(); 
    const regex = /^[A-Za-z\s]+$/;
    if (text !== '' && text.match(regex)) {

        inputText.value = '';
        inputText.focus();

        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        button.textContent = "remover";
        const checkbox = document.createElement("input");
        const p = document.createElement('p');
        p.textContent = text;
        checkbox.type = "checkbox";
        
        span.appendChild(checkbox);
        span.appendChild(p);
        // span.appendChild(checkbox);
        // span.textContent = text;
        // li.textContent = text;
        // li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);
        listconvid.appendChild(li);

        // Tachando elementos marcados com checkbox

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                // Checkbox está marcado, então tacha o texto
                li.style.textDecoration = "line-through";
            } else {
                // Checkbox não está marcado, então remove o tachado
                li.style.textDecoration = "none";
            }
        });

        // Removendo itens individualmente da lista
        
        button.addEventListener('click', () => {
            listconvid.removeChild(li);
        });

        // Removendo todos os elementos da lista

        btnapg.addEventListener("click", function() {
            while (listconvid.firstChild) {
                listconvid.removeChild(listconvid.firstChild);
            }
        });

    } else {
        window.alert("O valor inserido não é válido.")
    }
}






