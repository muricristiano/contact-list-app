export function getCountryCodes(){
    fetch(`https://api.geographql.rudio.dev/graphql`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            query: `
                {
                    countries(
                        page: {
                            first: 250
                        }
                    ){
                        edges {
                            node {
                                name,
                                phone_code
                            }
                        }
                    }
                }
            `
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}