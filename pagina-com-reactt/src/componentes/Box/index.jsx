export default function Box( { data } ) {

    return (
        <>
           {data.map(box => (

            <div className={box.classeNomePai}>
                <div className={box.classeNomeNumEIMG}>
                    <h1>{box.numero}</h1>
                    <img src={box.logo} alt={box.textoAlternativo}/>
                </div>
                
                <h2>{box.nomeDaRede}</h2>
                <p>{box.textoDaRede}</p>
            </div>


           ))}
        </>

    )
    
}