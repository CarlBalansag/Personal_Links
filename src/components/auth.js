import {useState, useEffect} from "react";
import { auth, db} from "../config/firebase";
import { confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";
import GreenAlert from "./GreenAlert";
import RedAlert from "./RedAlert";
import GetUsersData from "./UserData";
import { addDoc, collection, getDocs } from 'firebase/firestore';

const usersCollectionRef = collection(db, "Users")

// GetUsersData();

export const SignUp = () => {

    const [usersDataBase, setUserDataBase] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [valid, setValid] = useState('');
    const [message, setMessage] = useState("");
    const [id, setID] = useState("");

    const usersCollectionRef = collection(db, "Users")

    const addUserToDB = async () => {
        const data = await getDocs(usersCollectionRef)
        const id = data.docs.map((doc) => (doc.id))
        try {
        await addDoc(usersCollectionRef, {
            email: email, 
            username: username});
        } catch (err) {
            console.error(err);
        }};
    

    const signIn = async () => {  

        let isUsernametaken = false;
        const data = await GetUsersData()
        for (let i = 0; i < data.length; i ++){
            let current = data[i].username;
            if (current === username) {
                isUsernametaken = true;
            }
        }

        if (isUsernametaken === true) {
            setValid(<RedAlert message="Username taken"/>)
        } else {
            if(email.length === 0 || email.password === 0) 
            {setValid(<RedAlert message="Form not finished"/>)} 
            else {            
                if (username.length === 0) {
                setValid(<RedAlert message="Invalid Username"/>) ///Later on also verify if the username is already in firestore if it is give it an error
                } else {
                    await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        setValid(<GreenAlert  message=" Email Created"/>)
    
                        //Adding to firestore
                        addUserToDB();
                    })
                    .catch((error) => {
                        setValid(<RedAlert message=" Invalid Email or Password"/>)
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                    })
                }}
        }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        required
                        className="block w-full mb-4 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring- focus:ring-inset  focus:ring-offset-1 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="off"
                        required
                        className="block w-full  rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring- focus:ring-inset  focus:ring-offset-1 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">

                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                        Password
                    </label>
                    </div>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        required
                        className="block w-full mb-8 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring- focus:ring-inset  focus:ring-offset-1 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <button
                    onClick={signIn}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 mb-6 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign in
                    </button>
                </div>

                <div>
                    {valid}
                </div>
            </div>
        </div>
    )
}

