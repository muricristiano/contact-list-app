import { getCountryCodes } from '../../queries/queries';

import { NewContactStyles } from "./NewContact-styles";

export function NewContact() {
    getCountryCodes()
    
    return (
        <NewContactStyles>
            <p>New Contact</p>

            <form>
                <div className="input_form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="country">Country: </label>
                    <select id="country">
                        <option selected hidden>Select Country</option>
                    </select>
                </div>

                <div className="input_form">
                    <label htmlFor="number">Number: </label>
                    <input disabled type="text" id="number" placeholder='Select Country'></input>
                </div>

                <div className="input_form">
                    <label htmlFor="region">Region: </label>
                    <input placeholder='Select Country' disabled type="text" id="region"></input>
                </div>
            
                <div className="input_form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="timezone">Timezone: </label>
                    <input placeholder='Select Country' disabled type="text" id="timezone"></input>
                </div>

        <div className='form_actions_container'>
            <button className="secondary_button" type="submit">Reset</button>
            <button className="primary_button" type="submit">Add</button>
        </div>
            </form>
        </NewContactStyles>
    )
}