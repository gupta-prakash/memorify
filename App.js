import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Login from "./Components/Login"

function App() {

  const [users, setUsers] = useState([
    {
      username: "prakash_gupta210",
      password: "prakash_gupta",
      email: "prakash123@gmail.com"
    }
  ])

  const [cards, setCards] = useState([
    {
      id: 1,
      username: "prakash_gupta210",
      title: "Note 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      id: 2,
      username: "prakash_gupta210",
      title: "Note 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2021/06/02/20/56/antelope-canyon-6305458__340.jpg"
    },
    {
      id: 3,
      username: "prakash_gupta210",
      title: "Note 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2021/07/01/21/20/girl-6380331__340.jpg"
    },
    {
      id: 4,
      title: "Note 4",
      username: "prakash_gupta210",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2021/06/04/15/10/sand-6310114__340.jpg"
    },
    {
      id: 5,
      title: "Note 5",
      username: "prakash_gupta210",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2021/05/14/12/26/man-6253257__340.jpg"
    },
    {
      id: 6,
      username: "prakash_gupta210",
      title: "Note 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2021/05/25/12/59/mountain-6282389__340.jpg"
    },
    {
      id: 7,
      username: "prakash_gupta210",
      title: "Note 7",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus eligendi necessitatibus quae soluta nobis aliquid fugiat, ea fuga corporis quaerat officiis? Beatae tenetur debitis quia vel necessitatibus, deserunt magnam at laudantium ut deleniti eveniet veritatis nam, quas ea doloremque sunt! Qui architecto voluptas eius ea iste sit ut sequi incidunt provident fugit pariatur molestias consequuntur similique repellat dolore ipsam quia neque sed, voluptatum suscipit illum. Sit exercitationem ad quos modi, doloribus cupiditate esse itaque laborum provident magni quis id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic modi dicta voluptates, numquam natus nobis accusamus tempore expedita assumenda nulla architecto, officia reiciendis quaerat optio iure commodi amet repellat, exercitationem cupiditate impedit dolorum eveniet? Explicabo quam, eligendi aliquid iusto officia voluptatibus, est eaque similique soluta aspernatur sapiente. Quos, voluptatem quas molestiae sint dolorem distinctio doloremque suscipit eligendi in voluptates pariatur placeat aliquid eos doloribus atque et? Id ad rem laudantium. Deleniti, praesentium. Voluptatibus, totam repellat. Voluptatem reprehenderit ad quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt ipsum nobis maiores, veniam incidunt unde architecto cupiditate dolores ullam doloribus in totam, itaque pariatur magni sint? Sunt at perspiciatis quas, voluptatum dignissimos magni, corporis harum, quis architecto doloremque nulla sint ratione? Odit reiciendis sunt blanditiis commodi cumque vitae sit necessitatibus assumenda molestias eaque velit, id nesciunt esse quos error et debitis dignissimos cum, vel similique amet. Recusandae quisquam libero voluptate, sequi nesciunt atque ea tenetur maiores tempora, maxime dicta.",
      avatar: "https://cdn.pixabay.com/photo/2019/09/01/10/13/portrait-4444764__340.jpg"
    }
  ])

  const [moon_sun, setMoon_sun] = useState(true);

  const themeBgColor={
    backgroundColor:null
  }

  const fontColor={
    color:null
}
  const cardShadow={
    boxShadow:null
}

const addImageFont={
  color:null
}

const specialStyle={
  top:null,
  boxShadow: null
}

const invertAddImage={
  filter:null
}

  const changeIconHandler = () => {
    setMoon_sun(!moon_sun);

  }
  
  if(moon_sun){
    themeBgColor.backgroundColor="white"
    fontColor.color='black'
    cardShadow.boxShadow= '0 8px 16px 0 rgba(0,0,0,0.2)';
    addImageFont.color= '#7a4444';
    specialStyle.boxShadow= '0 44px 186px 0 rgb(181 180 180)'
    invertAddImage.filter=null
  }     
  else{
    themeBgColor.backgroundColor="#1e1d1d";
    fontColor.color='white'
    cardShadow.boxShadow= '0 8px 16px 0 rgb(217,194,194,0.2)';
    addImageFont.color= '#c2c0c0';
    specialStyle.boxShadow= 'rgb(90 81 81) 0px 44px 186px 0px';
    invertAddImage.filter='invert(100%)';
  } 

  const [loginInfo, setLoginInfo] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const[specialCardTitle, setSpecialCardTitle]=useState("");
  const[specialCardDescription, setSpecialCardDescription]=useState("");

  const changeInputTitleHandler = (event, id) => {
    const cardIndex =cards.findIndex(card => card.id === id)
    const cards_copy = [...cards]
    cards_copy[cardIndex].title = event.target.value
    setCards(cards_copy)
  }
  const changeInputDescriptionHandler = (event, id) => {
    const cardIndex = cards.findIndex(card => card.id === id);
    const cards_copy = [...cards];
    cards_copy[cardIndex].description = event.target.value;
    setCards(cards_copy);
  }
  const deleteCardHandler = cardIndex => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  }

  const [specialCard,setSpecialCard]=useState(false);
  
  const readMoreHandler = cardIndex =>{
    setSpecialCardTitle(cards[cardIndex].title);
    setSpecialCardDescription(cards[cardIndex].description)
    setSpecialCard(true);  
  }
  
  const closeSpecialCard=()=>{
    setSpecialCard(false); 

  }

  if(specialCard) specialStyle.top= "90px";
  else specialStyle.top= "-900em";
  
  const loadFileHandler = event => {
    var avatar = document.getElementById('input_avatar');
    avatar.src = URL.createObjectURL(event.target.files[0]);
  };

  const createNewCardHandler = () => {
    const avatar = document.getElementById('input_avatar');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    let cards_copy = [...cards];
    cards_copy = cards_copy.concat([{
      id: cards[cards.length - 1].id + 1,
      title: title.value,
      description: description.value,
      avatar: avatar.src
    }]);
    setCards(cards_copy);
    document.getElementById('avatar').value = null;
    avatar.src = "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429__340.png";
    title.value = null;
    description.value = null;
  }

  const registerHandler = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    let users_copy = [...users];
    users_copy = users_copy.concat([{
      username: username.value,
      password: password.value,
      email: email.value
    }]);
    setUsers(users_copy);
    setLoginInfo("Now you can Log In");
  }

  const loginHandler = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const userIndex = users.findIndex(user => user.username === username.value);
  
    if (userIndex !== -1) {
      if (users[userIndex].password === password.value) {
        console.log("correct details login successful");
        setIsLogin(true);
      }
      else {
        setLoginInfo("Incorrect Password")
      }
    }
    else {
      setLoginInfo("Incorrect Username")
    }
  }

  const descriptionTrim= description=>{
    return description.substring(0,275);
  }

  const cardsMarkup = cards.map((card, index) => 
      <Card
        light_dark={moon_sun}
        title={card.title}
        description={descriptionTrim(card.description)}
        fullDescription={card.description}
        avatar={card.avatar}
        key={card.id}
        onChangeInputTitle={(event) => changeInputTitleHandler(event, card.id)}
        onChangeInputDescription={(event) => changeInputDescriptionHandler(event, card.id)}
        onDelete={() => deleteCardHandler(index)} 
        onReadMore={()=> readMoreHandler(index)}/>
    )

  const afterLoginCardsMarkup = <div style={themeBgColor}>
    <div id="navbar">
      <div id="logoContainer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVmFY6GXbjlcaGTvHmXa9EdywHUeMCIajKXPRNusX4qZ8b6VYak0Cmn6JB9F1-fsnomt9syqDWbA&usqp=CAU" alt="logo" className="logo"></img>
        <h3 style={fontColor}>Memorify</h3>
      </div>

      <div>
        <img style={invertAddImage} className="icon" alt="theme-icon" src={moon_sun ? "https://www.pinclipart.com/picdir/middle/103-1034877_black-sun-icon-transparent-clipart.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/OOjs_UI_icon_moon.svg/1200px-OOjs_UI_icon_moon.svg.png"} onClick={changeIconHandler}></img>
      </div>
    </div>

    <div className="cardContainer">
      <div id='specialCard' style={specialStyle}>
        <h4>{specialCardTitle}</h4>
        <p>{specialCardDescription}</p>
        <button className="btn" onClick={closeSpecialCard}>Close</button>
      </div>

      <div className="card" style={cardShadow}>
        <img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429__340.png" id="input_avatar" alt="Add Avatar"></img>
        <div>
          <label id="add_avatar" htmlFor="avatar" style={addImageFont}>Add Image</label>
          <input type="file" id="avatar" accept="image/*" onChange={(event) => loadFileHandler(event)} ></input>
        </div>
        <div><input className="inputTitle" type="text" id="title" placeholder="Add Title"></input></div>
        <div><textarea className="inputDescription" id="description" placeholder="Add Description"></textarea> </div>
        <div><button className="btn addMemoryButton" onClick={createNewCardHandler}>Add Memory</button></div>
      </div>

      {cardsMarkup}
    
    </div>
  </div>

  return (
    <div className="App" >

      {isLogin ? afterLoginCardsMarkup : <Login
        onLogin={loginHandler}
        onRegister={registerHandler}
        loginInfo={loginInfo} />}
    </div>
  );
}

export default App;