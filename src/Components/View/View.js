import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { db } from '../../firebase/config';
import { postContext } from '../../store/postContext';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(postContext)

  useEffect(() => {
    async function fetchDocs() {
      const { userId } = postDetails
      const q = query(collection(db, 'users'), where('id', '==', userId))
      const res = await getDocs(q)
      res.forEach((doc) => {
        setUserDetails(doc.data())
      })
    }

    fetchDocs();
  }, [postDetails])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.category}</span>
          <p>{postDetails.name}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
