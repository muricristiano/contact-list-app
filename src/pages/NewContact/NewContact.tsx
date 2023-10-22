import { NewContactStyles } from "./NewContact-styles";

export function NewContact() {
    return (
        <NewContactStyles>
            <h1>New Contact</h1>

            <form>
                <div className="input_form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="number">Number: </label>
                    <input type="text" id="number"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="region">Region: </label>
                    <input type="text" id="region"></input>
                </div>
            
                <div className="input_form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"></input>
                </div>

                <div className="input_form">
                    <label htmlFor="timezone">Timezone: </label>
                    <input type="text" id="timezone"></input>
                </div>


            </form>
        </NewContactStyles>
    )
}