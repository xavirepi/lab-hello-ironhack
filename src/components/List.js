import React from 'react';
import ListItem from './ListItem';
import '../assets/css/List.css';

const List = () => {
    return (
        <div className='List'>
            <ListItem 
                title='Declarative'
                description='Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar.'
                img={{src: '/images/icon1.png', alt: 'Declarative'}}
            />
            <ListItem 
                title='Declarative'
                description='Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar.'
                img={{src: '/images/icon2.png', alt: 'Declarative'}}
            />
            <ListItem 
                title='Declarative'
                description='Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar.'
                img={{src: '/images/icon3.png', alt: 'Declarative'}}
            />
            <ListItem 
                title='Declarative'
                description='Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar.'
                img={{src: '/images/icon4.png', alt: 'Declarative'}}
            />
        </div>
    )
}

export default List;