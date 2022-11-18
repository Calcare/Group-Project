import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/css/card.css'

const Card = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get("https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats")
        .then(res => {
            setPost(res.data)
        })
    },)
  return (
    <>
        {post.map((post
        )=>{return(
            <>
            <div className='col'>
            <div className="card pilihMakanan h-100" key={post.id} {...post}>
                <img src={post.image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{post.name}</h5>
                    <div className="card-text d-flex ">
                        <p id="protein" className="me-3">Protein : {post.protein} </p>
                        <p id="kalori">Kalori :{post.calories}   </p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-button">
                        <button  className="btn btn-primary me-2" id="pilih" >Pilih</button>
                        <a className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="detail">Detail</a>
                    </div>
                </div>
            </div>
            </div>
       
            <div className="modal  fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>{post.name}</strong></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            <img src={post.image}className="me-2" alt=""/>
                            <div className="modal-text ">
                                <h5 id="exampleModalLabel" className='mb-4'><strong>{post.name}</strong></h5>
                                <p id="protein" className="me-3">Protein : {post.protein}   </p>
                                <p id="kalori">Kalori : {post.calories}  </p>
                                <p id="karbohidrat" className="me-3">Karbohidrat : {post.carbohydrate}   </p>
                                <p id="fat">Fat : {post.fat}  </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="card-button">
                                <button  className="btn btn-primary me-2" id="pilih" >Pilih</button>
                                            
                                <a className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="detail">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>)})
        }
        
    </>
  )
}

export default Card
