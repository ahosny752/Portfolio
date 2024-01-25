'use client';
import styled from '@emotion/styled';
import { useFormStatus } from 'react-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
    height: 50px;
    background-color: #bc13fe;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    :hover {
        background-color: #6a0b90f1;
    }

    :disabled {
        background-color: #d1ace1;
    }
`;
export const FormButton = ({ isDisabled }: { isDisabled: boolean }) => {
    const { pending } = useFormStatus();

    return (
        <StyledButton disabled={isDisabled} type="submit">
            {pending ? (
                <CircularProgress
                    style={{
                        height: '20px',
                        width: '20px',
                        color: 'white',
                    }}
                    color="primary"
                />
            ) : (
                <div>
                    {isDisabled
                        ? 'Please fill out the required fields!'
                        : 'Sumbit'}
                </div>
            )}
        </StyledButton>
    );
};
