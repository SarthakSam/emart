import { IconContext } from 'react-icons';

export function Icons({ children, style = {}, className = "" }) {
    return (
    <IconContext.Provider value = { { style, className } } >
        <div>
        { children }

        </div>
    </IconContext.Provider>
    );
}

 {/* <Icons style = {{ position: 'absolute', fontSize: '1.5rem', right: '0.1em', fill: 'red'}} >
                        <FaHeart />
                    </Icons> */}