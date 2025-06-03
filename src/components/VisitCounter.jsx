import React, { useEffect, useState } from "react";
import { getDatabase, ref, runTransaction, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { FaUsers } from "react-icons/fa";

const firebaseConfig = {
    apiKey: "AIzaSyCV4iEqxizWCPEj-gROrS0HLgpMQhK6GoQ",
    authDomain: "enbaytech.firebaseapp.com",
    databaseURL: "https://enbaytech-default-rtdb.firebaseio.com/",
    projectId: "enbaytech",
    storageBucket: "enbaytech.firebasestorage.app",
    messagingSenderId: "821266136112",
    appId: "1:821266136112:web:7614b249944d71a71c81f5",
    measurementId: "G-MLNKMNXX4M"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const VisitsCounter = () => {
    const [visitCount, setVisitCount] = useState(null);

    useEffect(() => {
        const visitRef = ref(db, "visits/count");
        runTransaction(visitRef, (current) => {
            return (current || 0) + 1;
        })
            .then(() => get(visitRef))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setVisitCount(snapshot.val());
                }
            })
            .catch((err) => {
                console.error("Ziyaretçi sayısı alınırken hata:", err);
            });
    }, []);

    if (visitCount === null) return <p>Yükleniyor...</p>;

    return (
        <div className="flex items-center gap-2 font-poppins text-[#0f172a] dark:text-[#e0f2f1]">
            <FaUsers size={20} className="text-[#059669] dark:text-[#10b981]" />
            <p className="font-poppins">Ziyaret Sayısı: {visitCount}</p>
        </div>
    );
};

export default VisitsCounter;