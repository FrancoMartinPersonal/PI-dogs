import { connect } from 'react-redux'
import { Loading } from "../loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogs, getTemperaments, getDogsCreated } from "../../actions/actions";
import dogImg from "../../img/perro-silueta.jpg"
import styled, { css } from "styled-components";
import noDogs from '../../img/no-dog.svg'
const BodyDiv = styled.div`
height:fit-content;
width: 100%;
margin-top: 90px;
position: absolute;
/* ${({ theme }) => css`
    background: ${theme.colour.background};
  `} */
`
const DogCard = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
//width: fit-content;
width:700px;
//height: fit-content;
height:300px;
border: 3px solid white;
border-radius: 1%;
margin: 25px 25px;
flex-direction: row;
@media (max-width: 768px) {
    flex-direction: column;
     width:300px;
    height:600px; 
  }

 ${({ theme }) => css`
 background: linear-gradient(332deg, ${theme.colour.secondary.light} 0%, ${theme.colour.secondary.main} 48%,  ${theme.colour.secondary.light} 100%);
   
  `}
cursor:pointer;
&:hover{
    background: rgba(160,29,98,1);
background: linear-gradient(332deg, rgba(160,29,98,1) 0%, rgba(188,68,78,1) 48%, rgba(160,29,98,1) 100%);
}
`
const DogTextDiv = styled.div`
margin: 10px 15px;
width: 45%;
@media (max-width: 768px) {
    width: 75%;
  }
`

const DogText = styled.h6`
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImg = styled.div`
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 4px solid white;
border-radius: 10px;
margin: 10px 15px;
`

const PagesButton = styled.button`
margin: 10px 20px;
padding:5px 10px;
padding: ${state => state.paddingSend};
color:white;
${({ theme }) => css`

    background-color: ${theme.colour.primary.main};
    
  `}
border-style: none;
//border:2px solid white;
cursor:pointer;

`
const DivButton = styled.div`
margin-top:10px;
margin-bottom:0;

`
const Settings = styled.div`
display:flex;
flex-direction: column;
height: min-content;
justify-content: center;
align-content: center;
flex-wrap: wrap;
`
const SelectsDiv = styled.div`
display:flex;
@media (max-width: 950px) {
 
   flex-direction: column;
  }
`
const SelectDiv = styled.div`
display:flex;
height: min-content;
justify-content: center;
flex-direction: column;
align-self: center;
`
const LabelSelect = styled.label`
text-align: center;
${({ theme }) => css`
    color: ${theme.colour.secondary.dark};
  `} 
`
const Select = styled.select`
color:white;
text-align: center;
align-self: center;
min-width: 223px;
${({ theme }) => css`
    background: ${theme.colour.secondary.light};
  `} 

padding:5px;
height: fit-content;
font-size: 1.3em;
margin:5px 5px;
outline: none;
cursor:pointer;
border:none;
border-top:4px solid white;
`
const Form = styled.form`
margin-top:  10px;
flex-wrap: wrap;
display: flex;
flex-direction: row;
justify-content: center;
align-self: center;


`
const SpanError = styled.span`
margin:5px;
text-align: center;
text-justify:distribute;
align-self: center;
`
const DogsUl = styled.ul`
display:flex;
max-width: 100%;
justify-content: center;
flex-wrap: wrap;
`
const DogCardCreated = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
//width: fit-content;
width:700px;
//height: fit-content;
height:300px;
border: 3px solid white;
border-radius: 1%;
margin: 25px 25px;
flex-direction: row;
@media (max-width: 768px) {
    flex-direction: column;
     width:300px;
    height:600px; 
  }

background: rgb(129,122,16);
background: linear-gradient(332deg, rgba(213,183,47,1) 0%, rgba(150,145,33,1)48%,  rgba(213,183,47,1)100%);
cursor:pointer;
&:hover{
    
    background: linear-gradient(332deg, rgba(160,29,98,1) 0%, rgba(188,68,78,1) 48%, rgba(160,29,98,1) 100%);
}
`
const DogTextDivCreated = styled.div`
margin: 10px 15px;
width: 40%;

`

const DogTextCreated = styled.h6`
font-family:'roboto',sans-serif ;
color: #fff;
background-color: #0003;
font-size: 1em;
padding: 10px 16px;

`
const DogImgCreated = styled.div`
background-image: url(${props => props.imgApi});
background-size:cover;
background-origin:border-box;
background-repeat: no-repeat;
width:220px;
height: 170px;
border: 1px solid white;
border-radius: 40px;
margin: 10px 15px;
`
const DivPageNumbers = styled.div`
margin:5px ;
border:1px solid black;
padding:5px 12px;
color:white;

 ${({ theme }) => css`
    background: ${state => theme.colour[state.tono].main};
  `} 
border-style: none;
border:3px solid white;
border-radius: 10px;
cursor:pointer;
`

const PaginationDiv = styled.div`
background: #0005;
padding:10px;

margin: 20px 10px;
`
const PaginationH4 = styled.h4`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:1.4em;
letter-spacing: 2px;
color:white;

`
const InputSend = styled.input`
padding:5px;
width:15em;
background:#0002;
outline:none;
border:none;
${({ theme }) => css`
    border-bottom:2px solid ${theme.colour.primary.dark};
  `} 

`
var dogFinded = []
export function Dogs(props) {

    const [current, setCurrent] = useState(0)
    const [input, setInput] = useState("")
    const [error, setError] = useState()
    const [temp, setTemp] = useState()
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState()
    const [kindDog, setKindDog] = useState()
    const [sortWeight, setSortWeight] = useState()

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
    const sorteredDogs = () => {
        //  console.log(allDogs())
        if (sort == "A-Z" || sort == undefined) {
            return props?.dogs?.data?.sort((a, b) => {
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
        } else if (sort == "Z-A") {

            return props?.dogs?.data?.sort((a, b) => {
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
    const sorteredByWeight = () => {
        if (sortWeight == "peso menor a mayor") {
            var weightDogsNaN = sorteredDogs()?.filter(e => e.weight.includes("NaN"))
            var weightDogsNoNaN = sorteredDogs()?.filter(e => !e.weight.includes("NaN"))
            var weightDogs = weightDogsNoNaN?.sort((a, b) => {
                var dogWeightA = []
                var dogWeightB = []

                if (b.weight.includes("-") && a.weight.includes("-")) {
                    dogWeightA = a.weight.split(" - ")
                    dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0])) / 2)
                    dogWeightB = b.weight.split(" - ")
                    dogWeightB = ((Number(dogWeightB[1]) + Number(dogWeightB[0])) / 2)

                } else if (a.weight.includes("-") && !b.weight.includes("-") &&
                    b.weight !== "NaN") {
                    dogWeightB = b.weight;
                    dogWeightA = a.weight.split(" - ")
                    dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0])) / 2)
                } else if (b.weight.includes("-") && !a.weight.includes("-")
                    && a.weight !== "NaN") {
                    dogWeightA = a.weight;
                    dogWeightB = b.weight.split(" - ")
                    dogWeightB = ((Number(dogWeightB[1]) + Number(dogWeightB[0])) / 2)

                } else if (!a.weight.includes("-") && !b.weight.includes("-") &&
                    (a.weight !== "NaN" || b.weight !== "NaN")) {
                    dogWeightB = b.weight;
                    dogWeightA = a.weight;
                }

                return dogWeightA - dogWeightB

            })

            return weightDogs.concat(weightDogsNaN)
        } else if (sortWeight == "peso mayor a menor") {
            var weightDogsNaN = sorteredDogs()?.filter(e => e.weight.includes("NaN"))
            var weightDogsNoNaN = sorteredDogs()?.filter(e => !e.weight.includes("NaN"))
            var weightDogs = weightDogsNoNaN?.sort((a, b) => {
                var dogWeightA = []
                var dogWeightB = []

                if (b.weight.includes("-") && a.weight.includes("-")) {
                    dogWeightA = a.weight.split(" - ")
                    dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0])) / 2)
                    dogWeightB = b.weight.split(" - ")
                    dogWeightB = ((Number(dogWeightB[1]) + Number(dogWeightB[0])) / 2)

                } else if (a.weight.includes("-") && !b.weight.includes("-") &&
                    b.weight !== "NaN") {
                    dogWeightB = b.weight;
                    dogWeightA = a.weight.split(" - ")
                    dogWeightA = ((Number(dogWeightA[1]) + Number(dogWeightA[0])) / 2)
                } else if (b.weight.includes("-") && !a.weight.includes("-")
                    && a.weight !== "NaN") {
                    dogWeightA = a.weight;
                    dogWeightB = b.weight.split(" - ")
                    dogWeightB = ((Number(dogWeightB[1]) + Number(dogWeightB[0])) / 2)

                } else if (!a.weight.includes("-") && !b.weight.includes("-") &&
                    (a.weight !== "NaN" || b.weight !== "NaN")) {
                    dogWeightB = b.weight;
                    dogWeightA = a.weight;
                }

                return dogWeightA - dogWeightB

            })

            return weightDogsNaN.concat(weightDogsNoNaN).reverse()
        } else {
            return sorteredDogs()
        }
    }

    function filteredByKind() {
        var dogsFilteredByKind = []
        if (kindDog !== "todos" && kindDog !== undefined) {
            //setCurrent(0)
            sorteredByWeight()?.map(dog => {
                if (kindDog == "reales" && dog.image) {
                    dogsFilteredByKind.push(dog)
                } else if (kindDog == "creados" && !dog.image && dog.id.length > 3) {
                    //await getDogsCreated()
                    dogsFilteredByKind.push(dog)
                }
            })
        } else {
            // await getDogsCreated()
            dogsFilteredByKind = sorteredByWeight()
        }
        return dogsFilteredByKind
    }
    function filteredByTemp() {
        if (temp !== 'todos' && temp !== undefined) {
            var dogFilteredByTemp = []
            filteredByKind()?.map(dog => {
                if (dog?.temperament !== undefined && dog.temperament?.includes(temp)) {
                    dogFilteredByTemp.push(dog)
                }
            })
            console.log(dogFilteredByTemp)
            return dogFilteredByTemp
        } else {
            return filteredByKind()
        }


    }
    function filteredDogs() {
        // console.log(dogCreated())
        // console.log(props?.dogs?.data)
        // props.getDogsCreated()
        return filteredByTemp()?.slice(current, current + 12)

    }


    const nextPage = () => {
        if (filteredByTemp()?.length >= current + 13) {

            setCurrent(current + 12)
            window.scroll(0, 0)

        }

    }
    const backPage = () => {
        if (current !== 0) {
            window.scroll(0, 0)
            setCurrent(current - 12)

        }

    }
    function capitalizarPrimeraLetra(str) {
        var arrayString = []
        var arrayWords = str.split(" ")
        arrayWords.forEach(element => {

            arrayString.push(element.charAt(0).toUpperCase() + element.slice(1))
        })
        return arrayString.join(" ")

    }
    const handleChange = (e) => {


        setInput(capitalizarPrimeraLetra(e.target.value))

    }
    const onClickSearch = async (e) => {
        setLoading(true)

        if (props?.dogs?.data.length < 2) {

            await props.getDogs()
            setLoading(false)
            setError("redireccionado a perros, pulsa enviar otra vez para buscar");
        } else {
            e.preventDefault()


            dogFinded = props?.dogs?.data.find(dog => {
                return dog.name == capitalizarPrimeraLetra(input)
            })
            
            if (dogFinded == undefined) {
                dogFinded = props?.dogsCreated?.data.find(dog => {
                    return dog.name == capitalizarPrimeraLetra(input)
                })
              
            }
            if (dogFinded !== undefined) {
                


                props.getDogs(capitalizarPrimeraLetra(dogFinded.name)).then((e) => {
                    setLoading(false)

                    setError("se encontró")
                })


            } else if (props?.dogs?.data.length < 2) {
                setError("recargando");

            } else {
                setLoading(false)
                setError("no se ha encontrado el perro especificado");
            }

        }





        // console.log(props)
        // console.log(e)
    }
    const pageButtons = () => {
        var pages = []
        for (let index = 1; index <= (Math.ceil(filteredByTemp()?.length / 12)); index++) {
            pages.push(index)

        }

        return pages
    }

    useEffect(() => {
        document.title = "Foodox! - Todos los perros"


        props.getDogsCreated()

        props.getDogs().then((e) => {
            setLoading(false)

        })

       
        props.getTemperaments()

        return (() => {
            props.getDogs()
            props.getTemperaments()
            props.getDogsCreated()
        })
    }, [])

    useEffect(() => {
        props.getDogsCreated()


        return (() => {
            props.getDogsCreated()

            sorteredDogs()
        })
    }, [kindDog])

    console.log(filteredDogs(), "filtered dogs log")
    return (
        <BodyDiv>


            <Settings>

                <Form onClick={e => e.preventDefault()}>

                    <div>
                        <InputSend type="text" value={input} placeholder="buscar perro" onChange={e => handleChange(e)} />
                        <PagesButton paddingSend=" 5px 10px" onClick={e => onClickSearch(e)}>enviar</PagesButton>
                    </div>
                    <SpanError
                        style={error == "se encontró" ? { color: "green" } : { color: '#800' }
                        }>{error}</SpanError>

                </Form>
                <SelectsDiv>
                    {/*ordenar por peso */}
                    <SelectDiv>
                        <LabelSelect htmlFor="weight">weight</LabelSelect>
                        <Select name="weight"
                            onChange={e => {
                                e.preventDefault()
                                setSortWeight(e.target.value)
                            }}>
                            <option value="ninguno">ninguno</option>
                            <option value="peso menor a mayor">peso menor a mayor</option>
                            <option value="peso mayor a menor">peso mayor a menor</option>
                        </Select>
                    </SelectDiv>
                    {/*ordenar por temperamento*/}
                    <SelectDiv>
                        <LabelSelect htmlFor="temps">temps</LabelSelect>
                        <Select
                            name="temps"
                            onChange={e => {

                                e.preventDefault()
                              
                                setTemp(e.target.value)
                            }}>

                            <option
                            >todos</option>


                            {props.temps?.data?.map(temp => {
                                return (


                                    <option style={{ fontFamily: 'roboto' }}
                                        key={temp.id} name={temp.name} value={temp.name}>{temp.name}
                                    </option>

                                )
                            })}
                        </Select>
                    </SelectDiv>
                    {/*ordenar por creacion, real o todos*/}
                    <SelectDiv>
                        <LabelSelect htmlFor="dogs">dogs</LabelSelect>
                        <Select
                            name="dogs"
                            onChange={e => {

                                e.preventDefault()
                              
                                setKindDog(e.target.value)

                            }}>
                            <option value="todos">todos</option>
                            <option value="creados">creados</option>
                            <option value="reales">reales</option>
                        </Select>
                    </SelectDiv>
                    {/*ordenar por abecedario*/}
                    <SelectDiv>
                        <LabelSelect htmlFor="order by">order by</LabelSelect>
                        <Select name="order by"
                            onChange={e => {
                                e.preventDefault()
                                
                                setSort(e.target.value)
                            }}>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </Select>
                    </SelectDiv>
                    
                    
                </SelectsDiv>
            </Settings>

            {loading && <Loading />}
            {filteredDogs()?.length>0?
            <>
            <DogsUl>                
                {filteredDogs()?.map(dog => {
                   
                    if (dog.image) {
                        return (
                            <Link to={`/dogs/${dog?.id}`} key={dog?.id} style={{ textDecoration: 'none' }}>
                                <DogCard key={dog?.id}>

                                    <DogImg imgApi={dog?.image?.url || dogImg} />


                                    <DogTextDiv>
                                        <DogText style={{ color: '#fff000' }}>
                                            Breed
                                        </DogText>
                                        <DogText>
                                            {dog?.name}
                                        </DogText>
                                        <DogText style={{ color: '#2fd020' }}>
                                            Temperament
                                        </DogText>
                                        <DogText>
                                            {dog?.temperament}
                                        </DogText>
                                        <DogText style={{ color: '#a0a0a0' }}>
                                            Weight
                                        </DogText>
                                        <DogText>
                                            {dog?.weight} kg
                                        </DogText>
                                    </DogTextDiv>

                                </DogCard>
                            </Link>
                        )
                    } else if (dog.id.length > 10) {
                        return (
                            <Link to={`/dogs/${dog?.id}`} key={dog?.id} style={{ textDecoration: 'none' }}>
                                <DogCardCreated key={dog?.id}>
                                    <DogImgCreated imgApi={dogImg}></DogImgCreated>



                                    <DogTextDivCreated>
                                        <DogTextCreated style={{ color: '#fff000' }}>
                                            Breed
                                        </DogTextCreated>
                                        <DogTextCreated>
                                            {dog?.name}
                                        </DogTextCreated>
                                        <DogTextCreated style={{ color: '#2fd020' }}>
                                            Temperament
                                        </DogTextCreated>
                                        <DogTextCreated>
                                            {dog?.temperament}
                                        </DogTextCreated>
                                        <DogTextCreated style={{ color: '#a0a0a0' }}>
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
            </DogsUl>
            </>:
            <>
            <img src={noDogs}></img>
            
            </>
            }
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '15px 0',
                flexWrap: "wrap",

                justifyContent: 'center'
            }}>
                {pageButtons()?.map((num) => {
                    if (((12 + current) / 12) == num) {
                        return (
                            <DivPageNumbers key={num}
                                tono="secondary"
                                onClick={e => {
                                    e.preventDefault()
                                    var number = num - 1
                                    

                                    setCurrent(number * 12)
                                }}>
                                <h3>{num}</h3>
                            </DivPageNumbers>
                        )
                    } else {
                        return (
                            <DivPageNumbers key={num}
                                tono="primary"
                                onClick={e => {
                                    e.preventDefault()
                                    var number = num - 1
                                   

                                    setCurrent(number * 12)
                                }}>
                                <h3>{num}</h3>
                            </DivPageNumbers>
                        )
                    }

                })}
            </div>
            <DivButton>


                <PaginationDiv>
                    <PaginationH4>
                        pagina {(12 + current) / 12} de {(Math.ceil(filteredByTemp()?.length / 12))}
                    </PaginationH4>
                    <PaginationH4>
                        {current} de {filteredByTemp()?.length}
                    </PaginationH4>
                </PaginationDiv>

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
function mapStateToProps(state) {
    return {
        dogs: state.dogsLoaded,
        temps: state.tempsLoaded,
        dogsCreated: state.dogsCreated
    }
}
export default connect(mapStateToProps, { getDogs, getTemperaments, getDogsCreated })(Dogs)