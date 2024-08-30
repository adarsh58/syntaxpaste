
export const Data = [
    {
        Category: REACT,
        Concept: "CSS GRID Responsive Template ",
        Img: reactImg,
        Code: [
            {
                Logic: "",
                File: "Style.css",
                Syntax: `.containerGrid
{
height: 100vh;
display: grid;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
grid-template-areas: 'navbar navbar navbar '
                      'sidebar main main'
                      'sidebar box1 box2'
                      'sidebar footer footer';
                      grid-gap: .6rem;
                      text-align: center;
                      grid-template-columns: .8fr 1fr 1fr;
                      grid-template-rows: 1.8fr 2.5fr 1.5fr .8fr;

} 
nav{
  grid-area: navbar;
  background-color: lightgreen;
}
.main
{
  grid-area: main;
  background-color: lightcoral;
}
.sidebar
{
  grid-area: sidebar;
  background-color: rgb(132, 128, 240);
}
footer
{
  grid-area: footer;
  background-color: rgb(16, 155, 99);
}
.box1
{
  grid-area: box1;
  background-color: rgb(155, 16, 16);
}
.box2
{
  grid-area: box2;
  background-color: rgb(130, 155, 16);
}

@media (max-width: 640px) {
  .containerGrid
  {
    height: 100vh;
  display: grid;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  grid-template-areas: 'navbar'
                        'sidebar'
                        'main'
                        'box1'
                        'box2'
                        'footer';
                        grid-gap: .6rem;
                        text-align: center;
                        grid-template-columns:1fr;
                        grid-template-rows: 1.8fr 2.5fr 1.5fr 1.5fr .8fr;
  
  } 
}`
            },{
                Logic: "",
                File: "Index.jsx",
                Syntax: ` <div className="containerGrid">
      <nav>NavBar</nav>
      <div className="main">main</div>
      <div className="sidebar">sidebar</div>
      <div className="box1">box 1</div>
      <div className="box2">box 2</div>
      <footer>Footer</footer>
    </div>`
            }
        ]
    }

]