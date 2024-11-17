export function CoreConcept(props) //Alternatively CoreConcept({image, title, description}) Then I can use these as variables without props.
{
  return(
    <li>
      <img src={props.image} alt = "..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}