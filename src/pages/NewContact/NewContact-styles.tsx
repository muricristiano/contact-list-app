import styled from 'styled-components'

export const NewContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin-top: -3rem;

    p {
        color: #8b5cf6;
        font-size: 2rem;
    }
    
    form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        align-items: center;
    }

    .input_form {
        width: 50%;
        margin: 0.5rem auto;

        display: flex;
        align-items: center;
    }

    label {
        width: 10%;
        font-size: 1.25rem;
    }

    input,
    select {
        width: 50%;
        height: 2.5rem;
        background-color: transparent;
        border: 1px solid #8b5cf6;
        border-radius: 8px;
        color: #fff;
    
        &:disabled{
            border: 1px solid #999;
            background-color: #222;
        }
    }


    .form_actions_container{
        display: flex;
        gap: 1rem;
    }

    .primary_button {
        width: 10rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: #7b4ce6;
        color: #fff;
        font-size: 1.5rem;

        &:hover {
            background-color: #8b5cf6;

            transition: all 0.3s ease;
        }
    }

    .secondary_button {
        width: 10rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: #999;
        color: #fff;
        font-size: 1.5rem;

        &:hover {
            background-color: #bbb;

            transition: all 0.3s ease;
        }
    }
`