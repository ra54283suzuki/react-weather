const Results = (props) => {
  return (
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperature && <div>{props.results.temperature} <span>℃</span></div>}
      {props.results.conditionTEXT && 
        <div>
          <img src={props.results.icon} alt="icon"/>
          <span>{props.results.conditionTEXT}</span>
        </div>
      }
    </div>
  );
};

export default Results;