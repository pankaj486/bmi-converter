import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './state/action-creator/BmiAction';
import Plot from 'react-plotly.js';


interface Inputs {
  height: number ;
  weight: number;
}


const  App: React.FC = () => {

  const [text, setText] = useState<Inputs>({
    weight: 0,
    height: 0 
  });

  const onChangeHandler = (event:any) => {
    const {name, value} = event.target
    setText((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

 

  const dispatch = useDispatch();
// debugger
  const onClickHandler:React.MouseEventHandler<HTMLButtonElement> = () => {
    const userHeight = text.height;
    const userWeight = text.weight;
    const heightInCm = userHeight / 100;
    const bmiConverter = Math.round(userWeight / heightInCm ** 2);
    // console.log(bmiConverter);

    dispatch(addTask(bmiConverter));
  }

  const shows = useSelector(data => data);
  console.log(shows);


  return (
    <div>
      {/* <button onClick={onClickHandler}>Click me</button> */}
      <label>Enter Weight(kg): </label>
      <input name='weight' value={text.weight} onChange={onChangeHandler}></input>
      <br />
      <br />
      <label>Enter Height(cm): </label>
      <input name='height' value={text.height} onChange={onChangeHandler}></input>
      <br />
      <br />
      <button onClick={onClickHandler}>Convert</button>
      {/* <Test /> */}
      
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    </div>
    </div>
    
  );
}

export default App;

