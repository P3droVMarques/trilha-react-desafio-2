import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Search = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

 

    @media (max-width: 768px) {
        flex-direction: column;
           button {
        height: 42px;
    }
        input {
            width: 100%;
            margin-bottom: 10px;
     
        }
}
`