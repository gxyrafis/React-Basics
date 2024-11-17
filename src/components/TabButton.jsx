export default function TabButton(props)
{
    /*function handleClick()
    {

    }*/
    return (<li>
            <button className = {props.isSelected ? 'active' : undefined} onClick={/*handleClick*/props.onSelect}>{props.children}</button>
            {
                //If the isSelected property is true, then we set the CSS class. Otherwise it remains undefined.

                //The children prop is an existing react prop that's used to get the content between tages. E.g. <p>content</p>
            }
        </li>);
}