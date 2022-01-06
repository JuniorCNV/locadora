import React from "react";
import useFetch from "../hooks/useFetch";

export default function Teste() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/filmes')

    if(loading) return <p>Loading... wawa te amo</p>
    if(error) return <p>erro... wawa canalha</p>

    return(
        <div>
            teste testado
                <div>
                    {data.map(cont => (
                        <h1>{cont}</h1>
                        // console.log(cont.attributes),
                        // <h1>sla</h1>
                    ))}
                </div>
        </div>
    )
}

