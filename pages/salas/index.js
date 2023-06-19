import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const index = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        setSalas(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('salas')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('salas', JSON.stringify(itens))
            setSalas(itens)
        }
    }

    return (
        <Pagina titulo='Aluno'>

            <Link href="/salas/form" className='mb-2 btn btn-primary'>
                <AiOutlinePlus className='me-1' />
                Novo
            </Link>
            <div>
                <Table responsive='sm' striped bordered hover >
                    <thead>
                        <tr>
                            <th>Excluir</th>
                            <th>Nome</th>
                            <th>Capacidade</th>
                            <th>Tipo</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {salas.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/salas/' + i}>
                                        <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.capacidade}</td>
                                <td>{item.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Pagina>
    );
}

export default index