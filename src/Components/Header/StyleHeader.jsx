import styled from 'styled-components'


const HeaderStyle = styled.header`
    height:10rem;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    box-shadow: 0 0 3px 1px  #c9c9c9;

    animation: AnimUp 0.5s forwards ease;


    div{
        font-size:3rem;
        font-weight:600;
        letter-spacing:2px;
    }


    
    section {
        position:absolute;
        right:5rem;

        &:hover , &:focus{
            ul{
                opacity:1;
                visibility:visible;
            }
        }
    }

    ul{
        position:absolute;
        background:#e4e4e4;
        border:1px #ccc solid;
        padding:1rem;
        opacity:0;
        right: 2rem;
        visibility:hidden;
        
    }
    ul li{
        text-align:center;
        padding:0.2rem;
        font-size:1.8rem;
        font-weight: 600;
        padding: 1rem 0.2rem;
        letter-spacing:2px;
        
        &:hover a{
            color:black;
            
        }
    
    }
    ul li+li{
        margin: 1rem 0 0 0 ;
    }

    svg{
        width: 4rem;
        height:4rem;

        
    }


    @keyframes AnimUp{
        from{
            transform:translateY(-5rem);
            opacity:0;
        }
        to{
            transform:translateY(0rem);
            opacity:1;
        }
    }


    @media (max-width:600px){
        &{
            justify-content:space-around;
        }
        section{
            position:relative;
            right:0;
        }
    }


`




export {HeaderStyle}