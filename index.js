function Mendchilgee123(props) {
return (
    <div>
        <h1> {props.ner} </h1>
        <p> { props.nas}</p>
        <p> {props.surchBgaEseh ? "unen" : "choloo avsan"}</p>
        <p> { props.dunguud[0]}</p>
        <p> { props.dunguud[1]}</p>
        <p> { props.dunguud[2]}</p>
            {props.dunguud.map(
                (el,index) =>
            <p key={index}>{el}</p>
            )
        }
        <p> props.myObj.mergejil</p>
        <p> props.my.index</p>
    </div>
)
}
ReactDOM.render(
    // <h1>Hello</h1>,
    <Mendchilgee123 ner={ "hello dotj"}
    nas={20}
    surchBgaEseh={true}
    dunguud={[80, "dalan yos", true]}
    myObj={{mergjil: 'SW', index: 'DS2015077'}} />,
    document.getElementById('root')
);