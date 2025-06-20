import styled from "styled-components";

export const InputContainer = styled.div`

    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;
    

    input {
        background: transparent;
        border: 0;
        width: 96%;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
    }

    input:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        width: 90%;
        input {
            width: 90%;
        }
}
`