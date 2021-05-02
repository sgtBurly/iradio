import { useHistory } from 'react-router';

const Navbar = () => {

    const History = useHistory();


    const handleButtonClick = () => {
        History.push("/register");
    }

    return ( 
        <div>
            <button onClick={handleButtonClick}>Register!</button>
        </div>


     );
}
 
export default Navbar;