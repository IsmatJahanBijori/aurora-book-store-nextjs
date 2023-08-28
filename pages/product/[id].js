"use client"
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const productID = (params) => {
  console.log(params)
  const router = useRouter()
  console.log(router.query.id)
  const [product, setProduct]=useState(params.product)
  //http://localhost:3000/api/getProduct?id=1159142
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const { id } = router.query
  //   fetch(`http://localhost:3000/api/getProduct?id=${id}`)
  //   .then(res => res.json()).then(data => console.log(data))
  // }, [router.isReady])
  return (
    <div>
      <p> Hello</p>
    </div>
  )
}

export default productID
