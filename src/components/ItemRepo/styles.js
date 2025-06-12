import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FAFAFA;
        font-size: 16px;
        margin-top:20px;
        text-decoration: none;
    }

    a.remover:hover {
        color: #FF0000;
        transition: color 0.3s ease;
    }

    a.VerRepo {
        color: #FAFAFA;
        text-decoration: none;
        font-size: 16px;
    }

    a.VerRepo:hover {
        color: #00FF00;
        transition: color 0.3s ease;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`