import './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className='navbar'>
            {props.children}
        </div>
    );
}

export default NavigationBar;