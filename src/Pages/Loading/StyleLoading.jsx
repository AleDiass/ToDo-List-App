import styled from 'styled-components'


const LoadingDiv = styled.main`
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;

    div{
        border-radius:50%;
        width:10rem;
        height:10rem;
        border:10px #f1f1f1 solid;

        border-left:10px #ccc solid;

        animation: AnimLoading 0.6s infinite forwards linear;

        
    }


    @keyframes AnimLoading{
        to{
            transform: rotate(360deg)
        }
    }

    

`;


export {LoadingDiv}