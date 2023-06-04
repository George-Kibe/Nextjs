import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/Button"

const Contact = () => {
  return (
    <div className="">
      <div className="items-center">
        <h1 className="font-semibold text-[30px] md:text-[60px] text-center mb-10">Lets Get in Touch</h1>
      </div>      
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        <div className="md:flex-1 relative h-60 w-60 md:h-200 md:w-200 aspect-ratio-1/1">
          <Image src={"/contact.png"} alt="Contact Image" fill className={styles.image}/>
        </div>
        <form action="" className="flex flex-col flex-1 gap-5 ">
          <input type="text" className="p-1 bg-transparent border-[#bbb] border-2 border-solid outline-none"
           placeholder="Name"
          />
          <input type="email" 
           className="p-1 bg-transparent border-[#bbb] border-2 border-solid outline-none"
           placeholder="Email"
          />
          <textarea 
            className="p-1 bg-transparent border-[#bbb] border-2 border-solid outline-none" 
            name="" id="" cols="30" rows="10" placeholder="Message...">
          </textarea>
          <Button url={"#"} text={"Send"}/>
        </form>
       
      </div>
    </div>
  )
}

export default Contact