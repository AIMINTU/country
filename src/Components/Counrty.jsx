

const Counrty = ({mamu,handleClick, imaeges}) => {
    const {name,flags,cca3,languages}=mamu
    
    return (
        <div style={{border:'2px solid black',borderRadius:'15px'}}>
            <img height={'100px'} width={'200px'}src={flags.png} alt="" />
            <h3>Name:{name.common}</h3>
            <p>{languages?.eng}</p>

            <button onClick={()=>handleClick(mamu)} >Country details</button>
            <button onClick={()=>imaeges(mamu)}>Show img</button>
        </div>
    );
};

export default Counrty;