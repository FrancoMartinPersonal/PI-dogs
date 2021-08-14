import {connect} from 'react-redux'
import { Loading } from "../loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogs,getTemperaments,getDogsCreated } from "../../actions/actions";
import dogImg from "../../img/perro-silueta.jpg"
import styled from "styled-components";
const BodyDiv = styled.div `
height: fit-content;
width: 100%;
margin-top: 80px;
position: absolute;
background: radial-gradient(circle, rgba(101,31,98,0.2518662464985995) 0%, rgba(135,128,19,0.2526505602240896) 100%);
`
const DogCard = styled.div `

display: flex;
justify-content: space-around;
align-items: center;
width: 800px;
height: 300px;
border: 5px solid white;
border-radius: 2%;
margin: 100px auto;

background: rgb(139,15,78);
background: linear-gradient(332deg, rgba(139,15,78,1) 0%, rgba(168,58,58,1) 48%, rgba(139,15,78,1) 100%);
cursor:pointer;
&:hover{
    background: rgba(160,29,98,1);
background: linear-gradient(332deg, rgba(160,29,98,1) 0%, rgba(188,68,78,1) 48%, rgba(160,29,98,1) 100%);
}
`
const DogTextDiv = styled.div `
margin: 10px 15px;
width: 40%;

`

const DogText = styled.h6 `
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImg = styled.div `
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 4px solid white;
border-radius: 40px;
margin: 10px 15px;
`

const PagesButton = styled.button`
margin: 10px 20px;
padding:15px 20px;
color:white;
background: #35095a;
border-style: none;
border:3px solid white;
cursor:pointer;

`
const DivButton = styled.div `
margin-top:50px;
margin-bottom:100px;
`
const Form = styled.form `
margin: 40px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const SpanError = styled.span `
font-family: 'Robot', 'Times New Roman', Times, serif;
`
const DogCardCreated = styled.div `

display: flex;
justify-content: space-around;
align-items: center;
width: 800px;
height: 300px;
border: 5px solid white;
border-radius: 2%;
margin: 100px auto;

background: rgb(129,122,16);
background: linear-gradient(332deg, rgba(129,122,16,1) 0%, rgba(173,153,17,1) 48%, rgba(129,122,16,1) 100%);
cursor:pointer;
&:hover{
    background: rgb(129,122,16);
background: linear-gradient(332deg, rgba(150,145,33,1) 0%, rgba(213,183,47,1) 48%,  rgba(150,145,33,1)100%);
}
`
const DogTextDivCreated = styled.div `
margin: 10px 15px;
width: 40%;

`

const DogTextCreated = styled.h6 `
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImgCreated = styled.div `
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 4px solid white;
border-radius: 40px;
margin: 10px 15px;
`
var dogFinded = []
export  function Dogs(props){

    const [current,setCurrent] = useState(0)
    const [input,setInput] = useState("")
    const [error,setError] = useState()
    const [temp,setTemp] = useState()
    const [loading,setLoading] =useState(true)
    const [sort, setSort] = useState()
    const [kindDog,setKindDog] = useState()
    const [sortWeight,setSortWeight] = useState()
    
    // const dogCreated = () => {
        
    //     // console.log(dogFinded)
    //     // if(dogFinded === undefined || Object.keys(dogFinded).length === 0 ){

    //         var dogCreatedMap = props?.dogsCreated?.data?.map(dog =>{
    //             var DogTemperaments = []
    //             dog.Temperaments.forEach(temperament =>{
    //                 DogTemperaments.push(temperament.name)
    //             })
    //             return  {
    //                 id:dog.id,
    //                 name:dog.name,
    //                 temperament:DogTemperaments.join(", ")
    //             }
    //         })    
            
    //         return dogCreatedMap
    //     // }else{
          
    //         //     var dogFindedInArr = [];
    //         //     dogFindedInArr.push(dogFinded)
    //         // var dogCreatedMap = dogFindedInArr?.map(dog =>{
             
    //         //     return  {
    //         //         id:dog.id,
    //         //         name:dog.name,
    //         //         temperament:dog.temperament
    //         //     }
    //         // }) 
            
    //         //return dogCreatedMap
    //     }

    // const allDogs=() =>{
    //     var AllDogs = []
    //    forEach(dog => AllDogs.push(dog))
    //     console.log(dogFinded)
    //     return AllDogs
    //  }
     const sorteredDogs =() => {
        //  console.log(allDogs())
         if(sort=="A-Z" || sort== undefined){
             return  props?.dogs?.data?.sort((a, b) => {
                 let fa = a.name.toLowerCase(),
                     fb = b.name.toLowerCase();
             
                 if (fa < fb) {
                     return -1;
                 }
                 if (fa > fb) {
                     return 1;
                 }
                 return 0;
             });
         }else if(sort=="Z-A"){
             
             return   props?.dogs?.data?.sort((a, b) => {
                 let fa = a.name.toLowerCase(),
                     fb = b.name.toLowerCase();
             
                 if (fa > fb) {
                     return -1;
                 }
                 if (fa < fb) {
                     return 1;
                 }
                 return 0;
             });
         }
     }
     const sorteredByWeight =() =>{
         if(sortWeight == "peso menor a mayor"){
            var weightDogsNaN = sorteredDogs()?.filter(e => e.weight.includes("NaN"))
            var  weightDogsNoNaN = sorteredDogs()?.filter(e => !e.weight.includes("NaN"))
    var  weightDogs = weightDogsNoNaN?.sort((a,b)=>{
            var dogWeightA =[]
            var dogWeightB =[]
          
            if(b.weight.includes("-") && a.weight.includes("-")){
                dogWeightA = a.weight.split(" - ")
           dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0]))/2)
                            dogWeightB  =  b.weight.split(" - ")
           dogWeightB = ((Number(dogWeightB[1]) +Number(dogWeightB[0]))/2)
          
       }else if(a.weight.includes("-") && !b.weight.includes("-") &&
       b.weight !=="NaN"){
        dogWeightB = b.weight;
           dogWeightA = a.weight.split(" - ")
           dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0]))/2)
       }else if(b.weight.includes("-") && !a.weight.includes("-")
       && a.weight !=="NaN"){
        dogWeightA = a.weight;
          dogWeightB  =  b.weight.split(" - ")
           dogWeightB = ((Number(dogWeightB[1]) +Number(dogWeightB[0]))/2)
          
       }else if (!a.weight.includes("-") && !b.weight.includes("-") && 
       (a.weight !=="NaN"|| b.weight !=="NaN")){
        dogWeightB = b.weight;
        dogWeightA = a.weight;
       }
      
          return dogWeightA - dogWeightB
          
        })
       
        return weightDogs.concat(weightDogsNaN)
    }else if (sortWeight == "peso mayor a menor"){
        var weightDogsNaN = sorteredDogs()?.filter(e => e.weight.includes("NaN"))
        var  weightDogsNoNaN = sorteredDogs()?.filter(e => !e.weight.includes("NaN"))
 var  weightDogs = weightDogsNoNaN?.sort((a,b)=>{
         var dogWeightA =[]
         var dogWeightB =[]
       
         if(b.weight.includes("-") && a.weight.includes("-")){
             dogWeightA = a.weight.split(" - ")
        dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0]))/2)
                         dogWeightB  =  b.weight.split(" - ")
        dogWeightB = ((Number(dogWeightB[1]) +Number(dogWeightB[0]))/2)
       
    }else if(a.weight.includes("-") && !b.weight.includes("-") &&
    b.weight !=="NaN"){
     dogWeightB = b.weight;
        dogWeightA = a.weight.split(" - ")
        dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0]))/2)
    }else if(b.weight.includes("-") && !a.weight.includes("-")
    && a.weight !=="NaN"){
     dogWeightA = a.weight;
       dogWeightB  =  b.weight.split(" - ")
        dogWeightB = ((Number(dogWeightB[1]) +Number(dogWeightB[0]))/2)
       
    }else if (!a.weight.includes("-") && !b.weight.includes("-") && 
    (a.weight !=="NaN"|| b.weight !=="NaN")){
     dogWeightB = b.weight;
     dogWeightA = a.weight;
    }
   
       return dogWeightA - dogWeightB
       
     })
    
     return weightDogsNaN.concat(weightDogsNoNaN).reverse()
        }else{
            return sorteredDogs()
        }
     }

function filteredByKind(){
    var dogsFilteredByKind = []
    if(kindDog!=="todos" && kindDog !== undefined){
        //setCurrent(0)
        sorteredByWeight()?.map( dog =>{
        if( kindDog=="reales" && dog.image){
            dogsFilteredByKind.push(dog)
        }else if(kindDog=="creados" && !dog.image && dog.id.length >3){
         //await getDogsCreated()
         dogsFilteredByKind.push(dog)
     }
    })
    }else{
    // await getDogsCreated()
     dogsFilteredByKind = sorteredByWeight()  
     }
     return dogsFilteredByKind
}
       function filteredDogs  ()  {
        // console.log(dogCreated())
        // console.log(props?.dogs?.data)
        // props.getDogsCreated()
      
       


        if(temp !== 'todos' && temp !== undefined){
           var dogFilteredByTemp= []
           filteredByKind()?.map( dog =>{
                if( dog?.temperament !== undefined && dog.temperament?.includes(temp)){
                    dogFilteredByTemp.push(dog)
                }
            })
            console.log(dogFilteredByTemp)
            return dogFilteredByTemp?.slice(current,current +9)
        }else{
            return filteredByKind()?.slice(current,current +9)
        }
        
    }
      


     const nextPage = () => {
         if(filteredByKind().length>=current +9 ){

            setCurrent( current +9)
            window.scroll(0,0)
           
         }
        
     }
     const backPage = () => {
         if(current !== 0){
            window.scroll(0,0)
            setCurrent( current -9)
            
         }
        
    }
    function capitalizarPrimeraLetra(str) {
        var arrayString = []
        var	arrayWords = str.split(" ")
        arrayWords.forEach(element => {
           
            arrayString.push(element.charAt(0).toUpperCase() + element.slice(1))  
            })
            return arrayString.join(" ")
          
        }
    const handleChange = (e) =>{
       
            console.log(capitalizarPrimeraLetra(e.target.value))
        setInput(capitalizarPrimeraLetra(e.target.value))
        console.log("↑↑set input")
        console.log(input)
        console.log("↑↑input")
    } 
      const  onClickSearch = async (e) =>{
        setLoading(true)

            if(props?.dogs?.data.length < 2){

                await props.getDogs()
                setLoading(false)
                setError("redireccionado a perros, pulsa enviar otra vez para buscar");
            }else{
                e.preventDefault()
                

                    dogFinded = props?.dogs?.data.find(dog =>{
                    return dog.name == capitalizarPrimeraLetra(input)
                    })
                    console.log(props?.dogs?.data)
                    console.log(dogFinded)
                    console.log("↑ en reales")
                    if(dogFinded == undefined){
                     dogFinded = props?.dogsCreated?.data.find(dog =>{
                        return dog.name == capitalizarPrimeraLetra(input)
                    })  
                    console.log(dogFinded)
                      console.log("↑ en creados↑")
                        console.log(props?.dogsCreated?.data)
                       }
                if(dogFinded !== undefined){
                    console.log(dogFinded )
                    console.log("↑ ya definido↑")
                      console.log(capitalizarPrimeraLetra(dogFinded.name))
                    

                          props.getDogs(capitalizarPrimeraLetra(dogFinded.name)).then((e)=>{
                            setLoading(false)
                           
                            setError("se encontró")
                        })
                  
                   
                }else if(props?.dogs?.data.length < 2){
                    setError("recargando");
                   
                }else{
                    setLoading(false)
                    setError("no se ha encontrado el perro especificado"); 
                }

            }
         

        
            
       
        // console.log(props)
        // console.log(e)
    }
    

    useEffect(() => {
        document.title = "Dogs! - Todos los perros"
       
       
        props.getDogsCreated()
    
        props.getDogs().then((e)=>{
            setLoading(false)
           
        })
        
        props.getTemperaments()
      
       return (()=> {
        props.getDogs()
        props.getTemperaments()
        props.getDogsCreated()
       })
    },[])
  
    useEffect(()=> {
        props.getDogsCreated()
      
       
        console.log(sorteredDogs())
        return (() => {
            props.getDogsCreated()
    
        sorteredDogs()
        })
    },[kindDog])
    
     console.log(sorteredDogs())
    return (
        <BodyDiv>
               <PagesButton
                        onClick={backPage}>
                            anterior</PagesButton>
                       <PagesButton
                       onClick={nextPage}
                       >siguiente</PagesButton>
           <Form onClick={e => e.preventDefault()}>
               <div>
               <h6>
                   pagina {(9+current) / 9} de {Math.round((9+filteredByKind()?.length)/ 9)  }
                   </h6>
                   <h6>
                   {current} de {filteredByKind()?.length}
                   </h6>
                </div>
             <div>
                <input type="text" value={input} onChange={e => handleChange(e)}/>
                <button onClick={e => onClickSearch(e)}>enviar</button>
             </div>
                <SpanError
                 style={error=="se encontró"?{color:"green"}:{color:'#800'}
                }>{error}</SpanError>

           </Form>
            {/*ordenar por temperamento*/}
                  <select style={{fontFamily:'roboto'}} onChange ={  e => {
                          e.preventDefault()
                          console.log(e.target.value)
                          setTemp(e.target.value)}}>

                       <option style={{fontFamily:'roboto'}} 
                        >todos</option>
                             
                   
                    {props.temps?.data?.map(temp =>{
                        return(


                           <option style={{fontFamily:'roboto'}}
                              key={temp.id} value={temp.name}>{temp.name}</option>
                               
                        )})}
                </select>
            {/*ordenar por abecedario*/}
                <select onChange= {e => {
                    e.preventDefault()
                    console.log(e.target.value)
                    setSort(e.target.value)
                }}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                {/*ordenar por peso */}
                <select onChange={e =>{
                    e.preventDefault()
                    setSortWeight(e.target.value)
                }}>
                    <option value="ninguno">ninguno</option>
                    <option value="peso menor a mayor">peso menor a mayor</option>
                    <option value="peso mayor a menor">peso mayor a menor</option>
                </select>
              {/*ordenar por creacion, real o todos*/}
              <select onChange= {e =>{
                  e.preventDefault()
                  console.log(e.target.value)
                  setKindDog(e.target.value)
                  
              }}>
                  <option value="todos">todos</option>
                  <option value="creados">creados</option>
                  <option value="reales">reales</option>
              </select>
            <ul>
                   {loading&&<Loading/>} 
           {filteredDogs()?.map( dog =>{
               if(dog.image){
                return (
                    <Link to={`/dogs/${dog?.id}` } key={dog?.id} style={{textDecoration:'none'}}> 
                       <DogCard  key={dog?.id}>
                          
                            <DogImg imgApi={dog?.image?.url||dogImg} />
    
                          
                           <DogTextDiv>
                           <DogText style={{color:'#fff000'}}>
                            Breed
                            </DogText>
                            <DogText>
                            {dog?.name}
                            </DogText>
                            <DogText  style={{color:'#2fd020'}}>
                            Temperament
                            </DogText>
                            <DogText>
                            {dog?.temperament}
                            </DogText>
                            <DogText  style={{color:'#a0a0a0'}}>
                                Weight 
                                </DogText>
                                <DogText>
                                {dog?.weight} kg
                                </DogText>
                           </DogTextDiv>
                   
                       </DogCard>
                       </Link>
                   )
               }else if (dog.id.length >10){
                return (
                    <Link to={`/dogs/${dog?.id}` } key={dog?.id} style={{textDecoration:'none'}}> 
                       <DogCardCreated  key={dog?.id}>
                          <DogImgCreated imgApi={dogImg}></DogImgCreated>
                           
    
                          
                           <DogTextDivCreated>
                           <DogTextCreated style={{color:'#fff000'}}>
                            Breed
                            </DogTextCreated>
                            <DogTextCreated>
                            {dog?.name}
                            </DogTextCreated>
                            <DogTextCreated  style={{color:'#2fd020'}}>
                            Temperament
                            </DogTextCreated>
                            <DogTextCreated>
                            {dog?.temperament}
                            </DogTextCreated>
                            <DogTextCreated  style={{color:'#a0a0a0'}}>
                                Weight 
                                </DogTextCreated>
                                <DogTextCreated>
                                {dog?.weight} kg
                                </DogTextCreated>
                           </DogTextDivCreated>
                   
                       </DogCardCreated>
                       </Link>
                   )

               }
               
           })}
           </ul>
           <DivButton>
           <PagesButton
                        onClick={backPage}>
                            anterior</PagesButton>
                       <PagesButton
                       onClick={nextPage}
                       >siguiente</PagesButton>
                         </DivButton>
            </BodyDiv>
          
)
}
function mapStateToProps(state){
    return {
        dogs : state.dogsLoaded,
        temps : state.tempsLoaded,
        dogsCreated: state.dogsCreated
    }
}
export default connect(mapStateToProps,{getDogs,getTemperaments,getDogsCreated})(Dogs)