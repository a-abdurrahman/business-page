import { Divider } from "antd"
import { useEffect, useState } from "react"
import testFeedbackData from "../assets/testFeedbackData"
import FeedbackCard from "../components/FeedbackCard"

export default function FeedbackDisplayPage() {
     const [reviewArray, setReviewArray] = useState(()=>{
        const reviewData = localStorage.getItem('reviews')
        const parsedData = JSON.parse(reviewData)
        return [...parsedData]
        
     })
     
     console.log(reviewArray) 
    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 overflow-y-scroll gap-5 h-screen bg-[#f8f8f8] lg:px-10 lg:py-14 py-7 px-3">
            {testFeedbackData.map((data)=>(
                <FeedbackCard data={data} key={data.id}/>
            ))}
            {reviewArray.map((data)=>(
                <FeedbackCard data={data} key={data.id}/>
            ))}
        </div>
    )
    
}