import React from 'react';
import { Form, Input, Button } from './styles';

import pokeball from '../../assets/pokeball.svg';

const CForm = (props) => {

    return (
        <Form 
            onSubmit={props.onSubmit}
        >
            <Input
            value={props.value}
            placeholder="Nome do pokemon ou id"
            onChange={props.onChange}
            />
            <Button>
            {props.loading ? (
                <span>carregando dados...</span>
            ) : (
                <>
                Buscar <img src={pokeball} alt="pokeball" />{' '}
                </>
            )}
            </Button>
        </Form>
    );
}

export default CForm;