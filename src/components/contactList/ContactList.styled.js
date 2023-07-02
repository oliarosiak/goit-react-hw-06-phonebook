import styled from '@emotion/styled';

export const ListContainer = styled.ul`
    padding: 12px;
    border: 1px solid var(--border-color);
    list-style-type: none;
    background-color: var(--bcg-color);
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px dotted var(--border-color);
    &:not(:last-child){
        margin-bottom: 4px;
    }
`;

export const ListBtn = styled.button`
    padding: 4px 12px;
    color: var(--text-color);
    font-size: inherit;
    font-weight: bold;
    background-color: inherit;
    border: 2px solid var(--kedavra-color);
    cursor: pointer;
    &:hover{    
        box-shadow: 0 0 20px var(--kedavra-color);
        border: 2px solid var(--border-color);
        outline: 1px solid var(--accent-color);
    }
`;