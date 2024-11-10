import React from 'react'

const Card = () => {
  const styles = [
    "border-2",
    "border-black",
    "p-[15px]",
    "flex",
    "flex-col",
    "items-center",
    "gap-2"
  ]
  const links = [
    "Facebook",
    "Twitter (X)",
    "Instagram",
    "Youtube"
  ]
  return (
    <div className=''>
        <div className={styles.join(" ")}>
            <p className='text-[1.5rem]'>Person {Math.floor(Math.random() * 100)}:</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga quas hic dolorum id dolore impedit veniam incidunt voluptate beatae eveniet, nobis saepe placeat at cupiditate eos eaque. Sunt, perferendis.</p>
            <p className="text-[1.5rem]">Links: </p>
            {links.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    </div>
  )
}

export default Card
