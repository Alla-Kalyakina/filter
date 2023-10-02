import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import ProjectList from './components/ProjectList'
import Toolbar from './components/Toolbar'

function Portfolio() {
  const [category, setCategory] = useState(Toolbar.selected);
  const [card, setCard] = useState(ProjectList.filterCards);

  const Filter = (e) => {
    let selectButton = e.target.textContent;
    setCategory(selectButton);
    if(selectButton === 'All') {
      setCard(Cards)
    } else {
      setCard(Cards.filter((el) => el.category === selectButton));
    }
  };

  return (
    <>
      <div className="button__wrapper">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={category}
          onSelectFilter={Filter}
          />
      </div>
      <div className="card-wrapper">
        {(category === undefined) ? Cards.map((element, index) => (<img key={index} src={element.img} alt={element.category}/>)) : <ProjectList filterCards = {card}/>}
      </div>
    </>
  )
}

export default Portfolio
