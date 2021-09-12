import { PersonalVideo } from "@material-ui/icons";
import React, { useState } from "react";
import "./tinderCard.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
    },
    {
      name: "Uchiha Sasuke",
      imgUrl: "https://i.pinimg.com/736x/a8/56/a7/a856a7c5ee4642b1c36e26790f421d6f.jpg"
    },
  ]);

  const swiped = (dir, nameToDelete) => {
    console.log("removing " + nameToDelete);
    // setLastDirection(dir);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  console.log(`url(${people[0].imgUrl})`)
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
