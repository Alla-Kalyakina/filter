function ProjectList({filterCards}){
    return (
         <>
             {filterCards.map((elem,index)=><img key={index} src={elem.img}/>)}
         </>
     )
 }

 export default ProjectList