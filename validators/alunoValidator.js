const alunoValidator = {

    cpf: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 14,
            message: 'O Minimo é 14'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 14,
            message: 'o maximo é 14'
        }, 
    },

    matricula: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 6,
            message: 'O Minimo é 6'
        },

        required: 'Campo Obrigatório!',
        maxLength: {
            value: 6,
            message: 'o maximo é 6'
        },   
    },

    email: {
        required: 'Campo Obrigatório!'
    }

}

export default alunoValidator