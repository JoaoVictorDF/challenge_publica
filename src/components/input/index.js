import React from 'react';
import NumericInput from 'react-numeric-input';

import { Container, Label, Button } from './styles';

const Input = ({ setValue, value, onClick }) => {
    return (
        <Container>
            <Label>
                Pontuação
            </Label>
            <NumericInput onChange={setValue} />
            <Button onClick={() => onClick(value)}>Salvar</Button>
        </Container>
    )
}

export default Input;