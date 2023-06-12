import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const index = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        setProfessores(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('professores')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('professores', JSON.stringify(itens))
            setProfessores(itens)
        }
    }

    return (
        <Pagina titulo='Professor'>

            <Link href="/professores/form" className='mb-2 btn btn-primary'>
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
                            <th>Matricula</th>
                            <th>Salário</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {professores.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/professores/' + i}>
                                        <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.matricula}</td>
                                <td>{item.salario}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Pagina>
    );
}

export default index