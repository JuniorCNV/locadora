import React from "react";
import useFetch from "../hooks/useFetch";

export default function Teste() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/filmes')

    if (loading) return <p>Loading... wawa te amo</p>
    if (error) return <p>erro... wawa canalha</p>

    return (
        <div>
            teste testado
            <div className="filmes">
                {data.data.map((data) => (
                    <div>
                        <h1>{data.attributes.titulo}</h1>
                        <h3>{data.attributes.Descricao}</h3>
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    )
}

