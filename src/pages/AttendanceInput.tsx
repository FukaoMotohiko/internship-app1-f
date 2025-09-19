import React from 'react'
import { useParams } from 'react-router-dom';


function AttendanceInput() {
    const { submissionId } = useParams();
    console.log("Submission ID:", submissionId);
    return (
        <div>
            
        </div>
    )
}

export default AttendanceInput
