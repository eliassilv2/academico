const cursoValidator = {
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

    duracao: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 20,
            message: 'o maximo é 20'
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
            value: 12,
            message: 'o maximo é 12'
        },  
    }

}

export default cursoValidator