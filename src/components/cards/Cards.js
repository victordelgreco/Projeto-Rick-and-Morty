import CardComponent from '../card/Card';
import './cards.css'

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const personagens =
    [
        {
            nome: 'Rick Sanchez',
            planeta: 'Earth',
            image: '',
            species: 'Human',
        },
        {
            nome: 'Morty Smith',
            planeta: 'Earth',
            image: '',
            species: 'Human',
        },
        {
            nome: 'Jerry Smith',
            planeta: 'Earth',
            image: '',
            species: 'Human',
        },
        {
            nome: 'Beth Smith',
            planeta: 'Earth',
            image: '',
            species: 'Human',
        },
        {
            nome: 'Summer Smith',
            planeta: 'Earth',
            image: '',
            species: 'Human',
        }
    ]



export default function CardsComponent() {

    return (
        personagens.map((personagem) => (
            <div >
                <Card className='divPersonagem' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{personagem.nome}</Card.Title>
                        <Card.Text>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Saíba mais</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        ))
    );
}

