import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const index = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        setAlunos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('alunos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('alunos', JSON.stringify(itens))
            setAlunos(itens)
        }
    }

    return (
        <Pagina titulo='Aluno'>

            <Link href="/alunos/form" className='mb-2 btn btn-primary'>
                <AiOutlinePlus className='me-1' />
                Novo
            </Link>
            <div>
                <Table responsive='sm' striped bordered hover >
                    <thead>
                        <tr>
                            <th>Excluir</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Dt. Nascimento</th>
                            <th>Matricula</th>
                            <th>Email</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {alunos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/alunos/' + i}>
                                        <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.dt_nascimento}</td>
                                <td>{item.matricula}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Pagina>
    );
}

export default index