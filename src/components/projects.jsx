import projectsData from './Data/projectsData';


const projects = () =>{
    return  <div className="landing-container__project-container">
        <h1>My firts projects</h1>
       <secction  className="landing-container__about-container__work">
                {projectsData.map((item,index) => {
                    return(
                        <div className="project__card-container">
                            <div className={"card " + index} key={index}>
                            <h1>{item.tittle}</h1>
                            <p>{item.contain}</p>                            
                            <a href={item.path} target="_blank" rel="noreferrer">{item.button}</a>
                        </div>
                        <div className="projects__img"><img src={item.img} alt="" /></div>
                        </div>
                        
                    )
                })}
            </secction>
    </div>
}

export default projects;
