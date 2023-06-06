const cursoValidator = {
    nome: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 5,
            message: 'o maximo é 5'
        },
    },

    duracao: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 5,
            message: 'o maximo é 5'
        },
    },

    modalidade: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 2,
            message: 'o minimo é 2'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 6,
            message: 'o maximo é 6'
        },
    }

}

export default cursoValidator