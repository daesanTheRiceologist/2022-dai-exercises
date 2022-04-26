import styled, {keyframes} from 'styled-components'
import Card from '../comps/Card';
import { fadeIn, fadeOut } from '../data/animation';
import shows from '../data/disney_shows.json';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';


const HomeCont = styled.div`
background:#AAD;
animation ${fadeIn} 5s;
`
const HomeH1 = styled.h1`
animation ${fadeOut} 10s;
`

const ShowCont = styled.div`
background:${props=>props.bg || "#ADA"};
animation:${props=>props.fade} 3s;
position:relative;
animation-delay:${props=>props.delay};
padding:10px;
animation-fill-mode:both;
}
`

export default function Home() {

  const [words, setWords] = useState("Welcome to my app!");
  const [f, setF] = useState(fadeIn);

  const [sel, setSel] = useState(1);

  const r = useRouter();
  var {qnum} = r.query;

  if(qnum  === undefined){
    qnum = 0;
  }

  const NextShow = () => {
    setF(fadeOut);

    setTimeout(()=>{
    r.push({
      pathname:"/",
      query:{
        qnum:Number(qnum) + 5
      }
    })

    },3000)
  }
  
  useEffect(()=>{
    setF(fadeIn);
  }, [qnum])

  return (
    <HomeCont>
      {}
      <HomeH1> {words} </HomeH1>
      <button onClick={
        ()=>setWords("Hi, this is changed")
      }>Change Words</button>

      <ShowCont
      bg={(sel === 1 ) ? "#ADA" : "#DAA"}
      delay="1s"
      onClick={
        ()=>setSel()
      }
      fade={f}>
        {shows[qnum].title} - 
        {shows[qnum].duration}
      </ShowCont>

      <ShowCont
      bg={(sel === 2 ) ? "#ADA" : "#DAA"}
      delay="2s"
      onClick={
        ()=>setSel(2)
      }
      fade={f}>
        {shows[qnum+1].title} - 
        {shows[qnum+1].duration}
      </ShowCont>

      <ShowCont
      bg={(sel === 3 ) ? "#ADA" : "#DAA"}
      delay="3s"
      onClick={
        ()=>setSel(3)
      }
      fade={f}>
        {shows[qnum+2].title} - 
        {shows[qnum+2].duration}
      </ShowCont>

      <ShowCont
      bg={(sel === 4 ) ? "#ADA" : "#DAA"}
      delay="4s"
      onClick={
        ()=>setSel(4)
      }
      fade={f}>
        {shows[qnum+3].title} - 
        {shows[qnum+3].duration}
      </ShowCont>

      <ShowCont
      bg={(sel === 5 ) ? "#ADA" : "#DAA"}
      delay="5s"
      onClick={
        ()=>setSel(5)
      }
      fade={f}>
        {shows[qnum+4].title} - 
        {shows[qnum+4].duration}
      </ShowCont>


      <p>
        <button onClick={
          ()=>NextShow()
        }>
          Next Show
        </button>
        
        <button onClick={
          ()=>setF(fadeOut)
        }>Fades Out</button>
    
      </p>
    </HomeCont>
  )
}
