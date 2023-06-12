const alunoValidator = {
    nome: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'O Minimo é 3'
        },
    },

    cpf: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 13,
            message: 'O Minimo é 13'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 13,
            message: 'o maximo é 13'
        },
    },

    matricula: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 13,
            message: 'O Minimo é 13'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 13,
            message: 'o maximo é 13'
        },  
    },

    email: {
        required: 'Campo Obrigatório!'
    }

}

export default alunoValidator