const profValidator = {
    nome: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 10,
            message: 'o maximo é 10'
        },
    },

    cpf: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 11,
            message: 'o maximo é 11'
        },
    },

    matricula: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 4,
            message: 'o maximo é 4'
        },
    },

    salario: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
    },
}   