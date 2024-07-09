import LinkList from "./LinkList";

export default function NavModal({open, handleClose} ) {
    return(
        <dialog open={open} className="mt-14 bg-[#F5F5F5]">
            <div className="flex flex-col w-[100vw] h-[95vh]  text-3xl font-medium space-y-7 items-center justify-center p-20">
                <LinkList handleClose={handleClose}/>
                <button onClick={handleClose} className="mt-8">Close</button>
            </div>
        </dialog>
    )
}