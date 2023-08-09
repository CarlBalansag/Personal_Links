import '../Main.css';
import profile from "../img/noProfile.png"
import {useState, useEffect} from "react";
import { auth, db} from "../config/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';

const usersCollectionRef = collection(db, "Users")

function GetUsersData(props) {
        const getUserDataBase = async () => {
            try{
                const data = await getDocs(usersCollectionRef)
                const filterData = data.docs.map((doc) => ({
                    ...doc.data(), 
                    id: doc.id
                }));
                // console.log(filterData);
                return filterData
            } catch (err) {
                console.log(err)
            }
        };
    return getUserDataBase();
}

export default GetUsersData;
