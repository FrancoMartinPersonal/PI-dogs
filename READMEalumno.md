<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# alumno SoyHenry : Franco Martin 

##  características

- Corrector/a : Elena Beatriz González
- API : Dogs
- alumno/a : Franco Martin 

## changes 
  ### 04/08/2021
 
  - backend /dogs path added 
   - query /dogs?=name backend dogs name added
   - idparam Dog/:idRaza backend id added
   - **commit name : three firsts endpoints done BACKEND** 
  - temperament in models and routes added
   - Dog_Temperament relation table added 

   ### 05/08/2021
-  Temperament added to data base and endpoint to use
-  Dog POST  added to data base and endpoint to use
  - **commit name : all endpoints and databases finished BACKEND** 
  ### 06/08/2021
  - consulting database instead return an const from await create
- **commit name :backend fixed and frontend started**
 - main and nav added with some details ;)
  ### 07/08/2021

 - **commit name :main and nav added**

  - main and nav improved
  - action and reducer getDog added
  - backend POST dog/ fixed (added Dog_temp in dog create) , added features 

  - **commit name :post dog fixed and added features**

  ### 08/08/2021
  - get Dogs improved, pagination added.
  - get dog by input added
  - control of errors from input searcher added
  - filter by temperament added!.
- **commit name :filter Temp, error control input and pagination simple added**
  ### 09/08/2021
  - filter by abecedary added.
  - dog detail pag added.
  - dog create started.
**commit name : A-Z, dog detail and dog create started and added**

- temperaments with key to dog create added
 ### 10/08/2021
 -added cancel and "no add the same key" to temperaments in create dog
- changed host to http://192.168.42.71:3000/
- form increased
- error and success message of submit dog created, created.
**commit name : form increased, no add the same key, host and form increased**
  ### 11/08/2021
  - post dogcreate created and working
  -show dog created in get dogs
  -temperaments frontend error fixed
  **commit name : post dog created, showing dogs in get dogs and temperaments frontend** 
  -filter by kind of dog added.
  -dog create details added.
  ### 12/08/2021
  **commit name :filter by kind of dog and details from dog create added**
  -dog create input searcher finished (maybe with some bugs)
  -frontend finished
  
**commit name :frontend finished, tests and stylish left**
  ### 13/08/2021
  -pagination fixed
  -loader added
  - get dogs in backend with created dog added and fixed error with search
  - get dogs only created menu fixed.
  - dogs sorted by weight 
  - dog searcher and dog detail title fixed 
  **commit name : features fixed and dogs sorted by weight added** 
  ## 15/08/2021
  -testing started
  **commit name: testing started**
## observaciones 
 ### 04/08/2021
    
  - [x] el query /dogs?=name no anda exactamente bien, lo manda al control centralizado de errores,
    reparar en la medida de lo posible el error. 
  - [ ]revisar excepción de id 35 en https://api.thedogapi.com/v1/breeds
      ** commit name : three firsts endpoints done BACKEND  ** 
  ### 05/08/2021
  - [x] el get de temperament tarda 2 segundos en cargar, es un tiempo considerable(al final no
  hubo problemas con la espera, hice pair programming y se llegaron a otras conclusiones pero ninguna
  tardaba más que otra)

 
   ### 08/08/2021
   -[ ]si llego, agregar en la base de datos un buscador que tire opciones de nombres semejantes a del 
   perro ingresado en el input
## guía
 1. hacer repaso por los plugins y dependencias instaladas
 2. empezar desde backend, y guiar hasta base de datos 