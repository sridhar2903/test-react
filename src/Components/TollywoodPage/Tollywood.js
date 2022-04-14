import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Tollywoodcontext } from './TollywoodContextapi'
import TopPostsDetails from '../Homepage/TopPostsDetails'
import LatestArticle from '../Homepage/LatestArticle'
import Advertisement from '../Homepage/Advertisement'

import './styletollywood.css'




const Tollywood = () => {

 
  let[tollywooddata]=useContext(Tollywoodcontext);

  const filterlone=tollywooddata.filter((tollywooddata)=>tollywooddata.id==="1")
  const tollywoodtoppostone=filterlone[0]
 
   const filterltwo=tollywooddata.filter((tollywooddata)=>tollywooddata.id==="2")
  const tollywoodtopposttwo=filterltwo[0]
 
   const filterlthree=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='3')
   const tollywoodtoppostthree=filterlthree[0]
 
   const filterpone=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='4')
   const  tollywoodtoppostfour=filterpone[0]
 
   const  filterptwo=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='5')
   const   tollywoodtoppostfive=filterptwo[0]
 
   const filterpthree=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='6')
   const tollywoodlatestone=filterpthree[0]
   
   const filterpfour=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='7')
   const tollywoodlatesttwo=filterpfour[0]
 
   const filterpfive=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='8')
   const tollywoodlatestthree= filterpfive[0]
 
   const filteraone=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='9')
   const tollywoodlatestfour= filteraone[0]
 
   const filteratwo=tollywooddata.filter((tollywooddata)=>tollywooddata.id==='10')
   const tollywoodlatestfive=filteratwo[0]
  
  
  return (
      <>
    <div className='tollywoodbody'>

         {/* TOURISM ARTICLES TITLE  ONLY*/}
        
    <h1 className="latestarticle-home-title">
         Tollywood
          
        </h1>
        <hr className="hr-latest" />
        <br />
        <br />




        {/* TOP-POST-TOURISM-SECTION */}
        <div className='top-post-home'>

          <h1 className="top-posts-article">Top Posts</h1>
          <hr className="hr-latest" />
          <br />
          <br />

          <div  >
          <Link to="/radheshyam" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tollywoodtoppostone} />
            </Link>
            <Link to="/rrr" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tollywoodtopposttwo} />
            </Link>
            <Link to="/pushpa" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tollywoodtoppostthree} />
            </Link>
            <Link to="/bheemlanayak" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tollywoodtoppostfour} />
            </Link>
            <Link to="/salaar" style={{ textDecoration: 'none',color:'black' }}>
            <TopPostsDetails datapost={tollywoodtoppostfive} />
            </Link>

          </div>

        </div>


        {/* TOURISM ARTICLES -INFO -SECTION */}
        <div >
          <br />
          <Link to="/radheshyam" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tollywoodlatestone} />
          </Link>
          <Link to="/rrr" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tollywoodlatesttwo} />
          </Link>
          <Link to="/pushpa" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tollywoodlatestthree} />
          </Link>
          <Link to="/bheemlanayak" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tollywoodlatestfour} />
          </Link>
          <Link to="/salaar" style={{ textDecoration: 'none',color:'black' }}>
          <LatestArticle dataarticle={tollywoodlatestfive} />
          </Link>
        </div>




        {/* ADVERTISEMENT - SECTION*/}

        <div className="floatadv-tollywood">
          <Advertisement />
        </div>
       
        </div>
        
        </>
  )
}

export default Tollywood