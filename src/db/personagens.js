const personagens = 
[

    {
        name:'Rick Sanches',
        planeta:'Earth',
        image:'',
        species: 'Humano'
    },
    {
        name:'Morty Smith',
        planeta:'Earth',
        image:'',
        species: 'Humano'
    },
    {
        name:'Jerry Smith',
        planeta:'Earth',
        image:'',
        species: 'Humano'
    },
    {
        name:'Beth Smith',
        planeta:'Earth',
        image:'',
        species: 'Humano'
    },
    {
        name:'Summer Smith',
        planeta:'Earth',
        image:'',
        species: 'Humano'
    }
] 

function GetDataCaracters(params) {
    let getPersonagens = personagens
    
    return(
        <>
        {getPersonagens}
        </>
    )
}

export default GetDataCaracters