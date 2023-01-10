/* eslint-disable no-unused-vars */

import { useState } from "react";
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            { (!book)?
                        <>
                        <h1>Books not found</h1>
                        </>
                :
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">Free</p>
                                    
                                </div>
                            </div>                            </>
                        )
                    }
                    
                
                    return (
                        <></>
                    )
                }
                )
            } 

        </>
    )
}
export default Card;