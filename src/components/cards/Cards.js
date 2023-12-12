import CardComponent from '../card/Card';
import './cards.css'

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const personagens =
    [
        {
            nome: 'Rick Sanchez',
            planeta: 'Terra',
            image: '',
            especie: 'Humano',
        },
        {
            nome: 'Morty Smith',
            planeta: 'Terra',
            image: '',
            especie: 'Humano',
        },
        {
            nome: 'Jerry Smith',
            planeta: 'Terra',
            image: '',
            especie: 'Humano',
        },
        {
            nome: 'Beth Smith',
            planeta: 'Terra',
            image: '',
            especie: 'Humano',
        },
        {
            nome: 'Summer Smith',
            planeta: 'Terra',
            image: '',
            especie: 'Humano',
        }
    ]



export default function CardsComponent() {

    return (
        personagens.map((personagem) => (
            <div className='components-grid'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{personagem.nome}</Card.Title>
                        <Table striped bordered hover>

      <tbody>
        <tr>
          <td>Planeta</td>
          <td>{personagem.planeta}</td>
        </tr>
        <tr>
          <td>Especie</td>
          <td>{personagem.especie}</td>
        </tr>
      </tbody>
    </Table>
                        <Button variant="dark">Saíba Mais</Button>
                    </Card.Body>
                </Card>
            </div>
        ))
    );
}

