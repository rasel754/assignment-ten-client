import  { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <div className='text-center my-10'><span className="loading loading-spinner loading-lg text-primary"></span></div>

    }
    if(user){
        return children;
    }

    return <Navigate to="/login">
        
    </Navigate>;
};

export default PrivateRoute;