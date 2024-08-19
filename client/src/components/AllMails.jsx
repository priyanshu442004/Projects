import React, { useEffect, useState } from 'react'
import Email from './Email'
import useGetAllMail from '../hooks/useGetAllMails'
import { useSelector } from 'react-redux';

const AllMails = () => {
  useGetAllMail();
  const {emails, searchMail}=useSelector(store=>store.app);
  const [filterEmail,setFilterEmail]=useState(emails);
  useEffect(()=>{
    const filteredEmail=emails.filter((email)=>{
      return email.subject.toLowerCase().includes(searchMail.toLowerCase()) || email.to.toLowerCase().includes(searchMail.toLowerCase()) || email.message.toLowerCase().includes(searchMail.toLowerCase())
    });
    setFilterEmail(filteredEmail)
  },[searchMail,emails])
  return (
    <div>
      {
        filterEmail && filterEmail?.map((mail)=>
        <Email key={mail._id} email={mail}/>)
      }
    </div>
  )
}

export default AllMails
