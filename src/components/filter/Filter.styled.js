import styled from '@emotion/styled';

export const FilterContainer = styled.div`
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid var(--border-color);
    background-color: var(--bcg-color);
`;

export const FilterLabel = styled.label`
    display: inline-block;
    letter-spacing: 4px;
`;

export const FilterInput = styled.input`
    display: block;
    width: 300px;  
    margin-top: 8px;
    padding: 4px;
    color: var(--text-color);
    background-color: inherit;
    border: 2px solid var(--border-color);    
    outline: 1px solid var(--accio-color);
    cursor: zoom-in;    
    transition: width 250ms cubic-bezier(0.5, 0, 0.75, 0) 25ms;
    &:hover, 
    &:focus{
    width: 700px;
    outline: 1px solid var(--accent-color);
    box-shadow: 0 0 20px var(--accio-color);    
    }
`;