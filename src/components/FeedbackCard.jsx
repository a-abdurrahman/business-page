export default function FeedbackCard({data}) {
    let str = 'dsaklnf l'
    let name = ''
    str.charAt(0)
    //String.charAt(0)
    function censorName(name){
        //get first letter of name
        let firstLetter = name.charAt(0)
        //get last letter of name
        let lastLetter = name.charAt(name.length-1)
        //get length of name
        let length = name.length - 2
        //first letter + *** + last letter
        return(firstLetter + '*'.repeat(length)+lastLetter)
    }
    // for(let i = 0; i < str.length; i++){
    //     if(i === 0){
    //         name += str[i]
    //     } else if(i === str.length - 1) {
    //         name += str[i]
    //     } else {
    //         name += "*"
    //     }
    // }
    if (!data) {
        return (<p>Failed to fetch data</p>)
    }
    return(
        <div className="flex flex-col items-center w-full h-[20vh] bg-white p-5 rounded-lg">
            {/* If displayName is true, then display it, else, censor it */}
            <h3>{data.displayName?data.name:censorName(data.name)}</h3>
            <p>
                {data.feedback}
            </p>
        </div>
    )
}