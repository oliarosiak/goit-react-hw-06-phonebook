import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 12px;
    padding: 12px;
    border: 1px solid var(--border-color);   
    background-color: var(--bcg-color); 
`;

export const FormLabel = styled.label`
    margin-bottom: 12px;
    letter-spacing: 4px;
`;

export const FormInput = styled(Field)`
    display: block;
    width: 300px;   
    margin-top: 8px;
    padding: 4px;
    color: var(--text-color);
    background-color: inherit;
    border: 2px solid var(--border-color);
    cursor: zoom-in;
    transition: width 250ms cubic-bezier(0.5, 0, 0.75, 0) 25ms;
    &:focus,
    &:hover{
        width: 700px;
        outline: 1px solid var(--accent-color);
        box-shadow: 0 0 20px var(--lumos-color);    
    }
`;

export const FormErrorMessage = styled(ErrorMessage)`
    display: block;
    width: 700px;  
    margin-top: 8px; 
    color: var(--text-color);
    font-size: 12px;
`;

export const FormBtm = styled.button`
    padding: 4px 12px;
    color: var(--text-color);
    font-size: inherit;
    font-weight: bold;   
    background-color: initial;
    border: 2px solid var(--lumos-color);
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 20px var(--lumos-color);    
        border-color: var(--border-color);
        outline: 1px solid var(--accent-color);    
    }
`;
