import Tabs from './tabs';
import './customTabs.css';


function RandomComponent(){
    return <div>NICE HAVING SOME RANDOM CONTENT HERE </div>
}

export default function TabTest (){

    const tabs = [
        {
            label : 'Tab 1',
            content: <div>This is Content for Tab 1</div>,
        },
        {
            label : 'Tab 2',
            content: <div>This is Content for Tab 2</div>,
        },
        {
            label : 'Tab 3',
            content: <RandomComponent />,
        },

    ]
 
    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }
    return <Tabs tabsContent={tabs} onChange={handleChange} />
}