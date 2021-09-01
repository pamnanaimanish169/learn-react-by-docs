import  ReactDOM    from    'react-dom';

function    Test()  {
    const name  = 'Josh Perez';
    const element   =   <h1>Hello, {name}</h1>
    return(
        <div>
            {element}
        </div>
    )
}

export default Test;