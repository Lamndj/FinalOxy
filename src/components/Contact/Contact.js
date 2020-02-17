import React , {useState} from "react"
import firebase from "firebase"
import Fade from 'react-reveal/Fade';

import "./contactus.css"

export default function ContactUs() { 

    const sendData = () => {
    
        var firebaseConfig = {
            apiKey: "AIzaSyDSgBogQWiELIMiMWCUvyeid3199ZwNaPs",
            authDomain: "oxeye-internship.firebaseapp.com",
            databaseURL: "https://oxeye-internship.firebaseio.com",
            projectId: "oxeye-internship",
            storageBucket: "oxeye-internship.appspot.com",
            messagingSenderId: "993604007939",
            appId: "1:993604007939:web:2748b4df6769e843ae7636",
            measurementId: "G-8VHG7SKQBK"
        };
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    
        var db = firebase.firestore();
        db.collection("contactInfo").add({
            name,
            message,
        })
        .then(function(docRef) {
            window.location.reload(false);
        })
        .catch(function(error) {
            console.log("Error adding document: ", error);
        });        
    }

    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    return(<>
    <div className="contactus">
        <h3>tell us how you feel</h3>
        <Fade left delay={500}>
        <input type="text" placeholder="Name" onChange={text => setName(text.target.value)}></input>
        </Fade>
        <Fade right delay={500}>
        <textarea type="text" placeholder="Message" onChange={text => setMessage(text.target.value)}></textarea>
        </Fade>
        <Fade bottom delay={700}>
        <button onClick={sendData} className="btn btn-outline-dark">SUBMIT</button>
        </Fade>
    </div>
    </>)
}

