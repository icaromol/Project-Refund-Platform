// Seleciona os elementos do formulário.
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const form = document.querySelector("form");

// Captura evento de input para formatar o valor.
amount.oninput = () => {
    // Obtém o valor e remove caracteres inválidos.
    let value = amount.value.replace(/\D/g, "")

    // Tranforma o valor em centavos.
    value = Number(value) / 100

    // Atualiza o valor do input.
    amount.value = formatCurrencyBRL(value)
}

// Formata para real.
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR"), {
        style: "currency",
        currency: "BRL",
    }

    return value
}

form.onsubmit = (event) => {
    event.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense:expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
    // Chama a função que irá adicionar o item na lista.
    expenseAdd(newExpense)
}



// Cria uma despensa na lista.
function expenseAdd(newExpense){
    try{
    } catch(error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error)
    }
}
