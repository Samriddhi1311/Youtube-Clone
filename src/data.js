// export const API_KEY ='AIzaSyCGECFtBDzRIlJx58A47V1VZELjoD2d0Sw'
export const API_KEY = 'AIzaSyC2vFhACzCOjvRq75i1JiAcu6xH9nS79xk'

export const value_converter =(value) => {
    if(value>=1000000)
        {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
        {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}