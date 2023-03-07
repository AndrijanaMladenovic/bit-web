import { Component } from "react";

export class HelloWorld extends Component{

  render(){
    const text = 'My React Blog';
    return <div className="naslov"><h1>{text}</h1></div>;
  
  }
}

export const Post = () =>{
  const ListOfPost =[
{
  text : 'Full he none no side',
  post : 'Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money.'
},
{
  text : 'Cordially convinced did incommode existence put out suffering certainly',
  post : 'On no twenty spring of in esteem spirit likely estate.'
},
{
  text : 'Quick six blind smart out burst',
  post : 'Her companions instrument set estimating sex remarkably solicitude motionless.'
},
{
  text:'Inquietude simplicity terminated she compliment remarkably few her nay',
  post:'Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led offending.'
},
{
  text:'Suppose end get boy warrant general natural',
  post:'Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off.'
},
{
  text:'Carriage quitting securing be appetite it declared',
  post:'Was certainty remaining engrossed applauded sir how discovery.'
}

]
  return(
    <ul>
    {ListOfPost.map((item, i) => {
        return <li key={i.toString()}><h2>{item.text}</h2><p>{item.post}</p></li>
    })}
</ul>
  )
}