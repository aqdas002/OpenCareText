import { MapPin } from "lucide-react";


const historyData = [
    { date: '2023-09-01', doctor: 'Dr. Smith', specialty: 'Cardiologist' },
    { date: '2023-06-15', doctor: 'Dr. Johnson', specialty: 'Dermatologist' },
    { date: '2023-04-20', doctor: 'Dr. Williams', specialty: 'Orthopedic' },
];

const PatientHistory = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Patient History</h2>
            <ul>
                {historyData.map((visit, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex items-start">
                            <MapPin/>
                            <div>
                                <h3 className="text-lg font-bold">{visit.date}</h3>
                                <p className="text-gray-700">
                                    Visited <span className="font-bold">{visit.doctor}</span>, a {visit.specialty}.
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientHistory;