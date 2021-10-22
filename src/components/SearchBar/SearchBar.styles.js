import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background: var(--darkGrey);
    padding: 0 20px;
`

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 35px ;
    background: var(--medGrey);
    border-radius: 100px;
    color: var(--white);

    img {
        position: absolute;
        left: 10px;
        top: 6px;
        width: 25px;
    }

    input{
        font-size: var(--fontBig);
        position: absolute;
        left: 0px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 20px;
        color: var(--white); 

        :focus{
            outline: none;
        }
    }
`