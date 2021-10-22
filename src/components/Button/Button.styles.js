import styled  from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    color: var(--white);
    font-size: var(--fontBig);
    transition: all 0.3s;
    margin: 20px auto;
    border: 0;
    border-radius: 30px;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`