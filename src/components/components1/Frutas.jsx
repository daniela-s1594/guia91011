export const Fruta =(props)=>{
    const x = props.fru;
    const listItems = x.map((frutas) => <li>{frutas}</li>);
return <ul>{listItems}</ul>;
};