import { Divider } from "antd"
import { useEffect, useState } from "react"
import testFeedbackData from "../assets/testFeedbackData"
import FeedbackCard from "../components/FeedbackCard"

export default function FeedbackDisplayPage() {
    // const [reviewArray, setReviewArray] = useState([])
    // useEffect(() => {
    //   setReviewArray(JSON.parse(localStorage.getItem('reviews'))) 
    // }, [])
    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 overflow-y-scroll gap-5 bg-[#f8f8f8] lg:px-10 lg:py-14 py-7 px-3">
            {testFeedbackData.map((data)=>(
                <FeedbackCard data={data} key={data.id}/>
            ))}
        </div>
    )
    
}