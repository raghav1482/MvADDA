import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from "../item/Item";
import "./slider.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 ,itemsToScroll:1},
    { width: 550, itemsToShow: 2 ,itemsToScroll:1},
    { width: 768, itemsToShow: 3 ,itemsToScroll:1},
    { width: 1200, itemsToShow: 4 ,itemsToScroll:1},
  ];

export default function Slider(props){
    // const [mydat,setMyDat]=useState([])
    // useEffect(()=>{
    //     axios.get("https://api.tvmaze.com/shows")
    //     .then((res)=>setMyDat(res.data));
    //   },[]);
      var i=1;
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(props.data);
    return(
<>
      <div className="slider">
        <h1>{props.type}</h1>
        <Carousel breakPoints={breakPoints}>
            {props.data.map(dat=>{
                if(dat.genres[0]===props.type || dat.genres[1]===props.type || dat.genres[2]===props.type){
                return <Item title={dat.name} key={dat.id} imag={dat.image.medium} page = {dat.url} eve={i++} keys={dat.id} detail={dat.summary} fav={true} del={false}/>
                }
            })}
        </Carousel>
      </div>
    </>
    );
}