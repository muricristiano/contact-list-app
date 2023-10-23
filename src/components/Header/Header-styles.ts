import styled from 'styled-components'

export const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    nav {
        margin-top: 2rem;
        display: flex;
        width: 100%;
        /* padding: 0.5rem 0; */
        justify-content: space-between;
    }

    a {
        display: flex;
        align-items: center;
        color: #F1EFEF;
        border: 4px solid gray;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        gap: 0.5rem;

        font-size: 1.5 rem;
        text-decoration: none;
    }

    .icon {
        color: #8b5cf6;
    }

    a.active {
        border: 4px solid #8b5cf6;
        transition: all 0.3s ease;

        .icon {
            color: #8b5cf6;
        }
    }

    a:hover{
        border: 4px solid #ab8cf6;
        transition: all 0.3s ease;

        .icon {
            color: #ab8cf6;
        }
    }


`